const ObjectId = require("mongoose").Types.ObjectId;
const models = require("./models");
const University = models.University;
const Course = models.Course;

/**
 * Lists all the university available.
 * Accepts query parameter 'q' on the university's name or country
 * TODO: Pagination should be enabled by default
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
    "_id name description address country"
  );
  try {
    let data = await query.exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err });
    return;
  }
}

async function RetreiveUniController(req, res, next) {
  let query = University.findById(
    { _id: req.params.id },
    "_id name description address country"
  );

  try {
    let data = await query.exec();
    if (data === null) {
      res.status(404).json({ err: "Document with that id does not exist." });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err });
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
              { name: { $regex: new RegExp(queryKeyword, "igu") } },
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
    res.status(400).json({ err });
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
      res.status(404).json({ err: "Document with that id does not exist." });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err });
    return;
  }
}

module.exports = {
  ListUnisController,
  RetreiveUniController,
  ListCourseController,
  RetrieveCourseController
};
