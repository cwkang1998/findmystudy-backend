const ObjectId = require("mongoose").Types.ObjectId;
const models = require("./models");
const University = models.University;
const Course = models.Course;

/**
 * Creates a list of university record in the server.
 * Admin can enter details of universities into the record in the server.
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function CreateUnisController(req, res, next) {
    const body = req.body;
    try {
        let data = await University.create({
            name: body.name,
            description: body.description,
            address: body.address,
            courses: JSON.parse(body.courses),
            icon: new URL(req.file.path, `${req.protocol}://${req.get("host")}`)
                .href
        });
        res.status(201).json({
            _id: data._id,
            name: data.name,
            description: data.description,
            address: data.address,
            courses: data.courses,
            icon: data.icon
        });
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

/**
 * Lists all the university available.
 * Accepts query parameter 'q' on the university's name or country
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function ListUnisController(req, res, next) {
    let queryCond = {};
    const queryKeyword = req.query.q;
    if (queryKeyword) {
        queryCond = {
            $or: [
                { name: { $regex: new RegExp(queryKeyword, "igu") } },
                { country: { $regex: new RegExp(queryKeyword, "igu") } }
            ]
        };
    }
    let query = University.find(
        queryCond,
        "_id name description address courses icon"
    );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function UpdateUnisController(req, res, next) {
    const body = req.body;
    let updateDetails = {};
    if (body.name) {
        updateDetails.name = body.name;
    }
    if (body.description) {
        updateDetails.description = body.description;
    }
    if (body.address) {
        updateDetails.address = body.address;
    }
    if (body.courses) {
        updateDetails.courses = JSON.parse(body.courses);
    }
    if (req.file) {
        updateDetails.icon = new URL(
            req.file.path,
            `${req.protocol}://${req.get("host")}`
        ).href;
    }
    if (
        !body.name &&
        !body.description &&
        !body.address &&
        !body.courses &&
        !req.file
    ) {
        res.status(400).json({ err: "no update perimeter given" });
        return;
    }

    try {
        await University.updateOne({ _id: req.params.id }, updateDetails, {
            runValidators: true
        });
        res.status(200).json();
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function RetreiveUniController(req, res, next) {
    let query = University.findById(
        req.params.id,
        "_id name description address courses icon"
    );

    try {
        let data = await query.exec();
        if (data === null) {
            res.status(404).json({
                err: "Document with that id does not exist."
            });
            return;
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function DeleteUnisController(req, res, next) {
    let deleteDetails = { _id: req.params.id };
    try {
        let data = await University.deleteOne(deleteDetails);
        res.status(200).json();
    } catch (err) {
        res.status(500).json({ err: err.message });
        return;
    }
}

/**
 * Creates a list of courses available in a university and record in the server.
 * Admin can enter the details of courses into the record in the server.
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function CreateCourseController(req, res, next) {
    const body = req.body;
    try {
        let data = await Course.create({
            name: body.name,
            university: body.university,
            description: body.description,
            costs: body.costs
        });
        res.status(201).json({
            _id: data._id,
            name: data.name,
            university: data.university,
            description: data.description,
            costs: data.costs
        });
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

/**
 * Lists all the courses available.
 * Accepts query parameter 'q' on the courses's name or
 * university name to search for courses on that uni,
 * Also accepts 'costs' as parameter for filtering by course pricing
 * TODO: Pagination should be enabled by default
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function ListCourseController(req, res, next) {
    let queryCond = {};
    const queryKeyword = req.query.q;
    const queryCost = req.query.costs;

    if (queryKeyword || queryCost) {
        // Find university with name matching keyword
        let uniIDs = new Array();
        let uniQuery = University.find(
            { name: { $regex: new RegExp(queryKeyword, "igu") } },
            "_id"
        );
        try {
            let data = await uniQuery.exec();
            for (let i = 0; i < data.length; i++) {
                uniIDs.push(ObjectId(data[i]._id));
            }
        } catch (err) {
            uniIDs = [];
        }

        // Building db query based on query params, 'q' and 'cost'.
        // Enables keyword based search for course with uni names or course names
        // and also costs based search for students with financial constraints
        if (queryKeyword && queryCost) {
            queryCond = {
                $and: [
                    {
                        $or: [
                            {
                                name: {
                                    $regex: new RegExp(queryKeyword, "igu")
                                }
                            },
                            { university: { $in: uniIDs } }
                        ]
                    },
                    { costs: queryCost }
                ]
            };
        } else if (queryKeyword && !queryCost) {
            queryCond = {
                $or: [
                    { name: { $regex: new RegExp(queryKeyword, "igu") } },
                    { university: { $in: uniIDs } }
                ]
            };
        } else if (queryCost && !queryKeyword) {
            queryCond = { costs: queryCost };
        } else {
            queryCond = {
                $or: [
                    { name: { $regex: new RegExp(queryKeyword, "igu") } },
                    { university: { $in: uniIDs } },
                    { costs: queryCost }
                ]
            };
        }
    }
    let courseQuery = Course.find(
        queryCond,
        "_id name university description costs"
    );
    try {
        let courseQueryResult = await courseQuery.exec();
        res.status(200).json(courseQueryResult);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function UpdateCourseController(req, res, next) {
    const body = req.body;
    let updateDetails = { _id: req.params.id };
    if (body.name) {
        updateDetails.name = body.name;
    }
    if (body.university) {
        updateDetails.university = body.university;
    }
    if (body.description) {
        updateDetails.description = body.description;
    }
    if (body.costs) {
        updateDetails.costs = body.costs;
    }
    if (!body.name && !body.university && !body.description && !body.costs) {
        res.status(400).json({ err: "no update perimeter given" });
        return;
    }

    try {
        let data = await Course.updateOne(
            { _id: req.params.id },
            updateDetails,
            { runValidators: true }
        );
        res.status(200).json();
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function RetrieveCourseController(req, res, next) {
    let query = Course.findById(
        { _id: req.params.id },
        "_id name university description cost"
    );
    try {
        let data = await query.exec();
        if (data === null) {
            res.status(404).json({
                err: "Document with that id does not exist."
            });
            return;
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function DeleteCourseController(req, res, next) {
    let deleteDetails = { _id: req.params.id };
    try {
        let data = await Course.deleteOne(deleteDetails);
        res.status(200).json();
    } catch (err) {
        res.status(500).json({ err: err.message });
        return;
    }
}

module.exports = {
    CreateUnisController,
    ListUnisController,
    UpdateUnisController,
    RetreiveUniController,
    DeleteUnisController,
    CreateCourseController,
    ListCourseController,
    UpdateCourseController,
    RetrieveCourseController,
    DeleteCourseController
};
