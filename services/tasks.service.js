


let Task = require('../models/task.model');
const boom = require('boom');
let constants = require('../constants');

module.exports.addTask = async (req, res, next) => {
    const content = req.body.content;

    let task = new Task({
        content: content,
        completed: false,
        status: constants.STATUS.ACTIVE
    });

    task.save()
        .then(task => {
            res.status(200).json({
                task
            });
        })
        .catch(err => {
            next(boom.internal(error))
        });
}


module.exports.getAllTasks = async (req, res, next) => {
    Task.find({}, function (err, tasks) {
        if (err) {
            next(boom.internal(error))
        } else {
            res.json(tasks);
        }
    })
    // .limit(req.limit) // add pagination
    // .skip(req.skip); // add pagination
}

module.exports.getTasksCompleted = async (req, res, next) => {

    Task.find({ status: constants.STATUS.COMPLETED }, function (err, tasks) {
        if (err) {
            next(boom.internal(error))
        } else {
            res.json(tasks);
        }
    });
}

module.exports.getTasksActive = async (req, res, next) => {

    Task.find({ status: constants.STATUS.ACTIVE }, function (err, tasks) {
        if (err) {
            next(boom.internal(error))
        } else {
            res.json(tasks);
        }
    });
}

module.exports.makeTaskCompleteById = (req, res, next) => {
    const id = req.body.id;

    Task.findById(id, function (err, task) {
        if (!task)
            next(boom.notFound())

        else if (task.status === constants.STATUS.COMPLETED) {
            next(boom.badRequest("task is already completed"))
        }

        else {
            task.status = constants.STATUS.COMPLETED;

            task.save()
                .then(task => {
                    res.json({
                        task: task
                    });
                })
                .catch(err => {
                    next(boom.internal(err))
                });
        }
    });
}

module.exports.makeTaskActiveById = (req, res, next) => {
    const id = req.body.id;

    Task.findById(id, function (err, task) {
        if (!task)
            next(boom.notFound())

        else if (task.status === constants.STATUS.ACTIVE) {
            next(boom.badRequest("task is already active"))
        }

        else {
            task.status = constants.STATUS.ACTIVE;

            task.save()
                .then(task => {
                    res.json({
                        task: task
                    });
                })
                .catch(err => {
                    next(boom.internal(err))
                });
        }
    });
}


module.exports.makeAllActive = async (req, res, next) => {

    await Task.updateMany({ status: constants.STATUS.COMPLETED }, { status: constants.STATUS.ACTIVE });

    res.json({
        message: 'successfully updated all tasks as active'
    });
}

module.exports.makeAllCompleted = async (req, res, next) => {

    await Task.updateMany({ status: constants.STATUS.ACTIVE }, { status: constants.STATUS.COMPLETED });

    res.json({
        message: 'successfully updated  all tasks as completed'
    });
}

// module.exports.getNodesNotArchived = async (req, res, next) => {
//     let userId = req.params.userId;

//     Task.find({ userId: userId, archived: false }, function (err, tasks) {
//         if (err) {
//             next(boom.internal(error))
//         } else {
//             res.json(tasks);
//         }
//     });
// }

// module.exports.getTaskById = (req, res, next) => {
//     let id = req.params.id;
//     let userId = req.params.userId;

//     Task.findById(id, function (err, task) {
//         if (err) {
//             next(boom.notFound())
//         }

//         // task not found or found task is not belong to the user
//         else if (!task || task.userId !== userId)
//             next(boom.notFound())

//         else
//             res.json(task);
//     });
// }

// module.exports.updateTaskById = (req, res, next) => {
//     const content = req.body.content;
//     const userId = req.body.userId;
//     const id = req.body.id;

//     Task.findById(id, function (err, note) {
//         // note not found or found note is not belong to the user
//         if (!note || note.userId !== userId)
//             next(boom.notFound())
//         else {

//             note.content = content;

//             let saveTask = () => {
//                 note.save()
//                     .then(note => {
//                         res.json({
//                             note: 'Task updated!',
//                             id: note.id
//                         });
//                     })
//                     .catch(err => {
//                         next(boom.internal(err))

//                     });
//             }

//             //if note is already archived update it
//             if (note.archived) {
//                 archiveHelper(note, (err) => {
//                     if (err) {
//                         next(boom.internal(err))
//                     }
//                     saveTask()
//                 })
//             }
//             else {
//                 saveTask();
//             }

//         }
//     });
// }

// module.exports.archiveTaskById = (req, res, next) => {
//     const userId = req.body.userId;
//     const id = req.body.id;

//     Task.findById(id, function (err, note) {
//         if (!note)
//             next(boom.notFound())

//         else if (note.userId !== userId)
//             next(boom.notFound())

//         else if (note.archived) {
//             next(boom.badRequest("note is already archived"))
//         }

//         else {

//             archiveHelper(note, (err) => {
//                 if (!err) {
//                     note.archived = true;

//                     note.save()
//                         .then(note => {
//                             res.json({
//                                 note: 'Task Archived!',
//                                 id: note.id
//                             });
//                         })
//                         .catch(err => {
//                             next(boom.internal(err))
//                         });

//                 }
//                 else {
//                     next(boom.internal(err))
//                 }
//             }
//             );
//         }
//     });
// }



// module.exports.unArchiveTaskById = async (req, res, next) => {
//     const userId = req.body.userId;
//     const id = req.body.id;


//     Task.findById(id, function (err, note) {
//         if (!note)
//             next(boom.notFound())

//         else if (note.userId !== userId)
//             next(boom.notFound())

//         else if (!note.archived) {
//             next(boom.badRequest("note is not archived"))
//         }

//         else {
//             fileDeleteHelper(note, (err) => {
//                 if (err) {
//                     res.status(500).send("File Delete from the system is not possible");
//                     return;
//                 }

//                 note.archived = false;

//                 note.save()
//                     .then(note => {
//                         res.json({
//                             note: 'Task unarchived',
//                             id: note.id
//                         });
//                     })
//                     .catch(err => {
//                         res.status(500).send("Task was not possible");
//                     });

//             })


//         }
//     });
// }

// module.exports.deleteATaskByUserIdandId = async (req, res, next) => {
//     const userId = req.body.userId;
//     const id = req.body.id;

//     Task.findById(id, function (err, note) {

//         let deleteTask = () =>
//             note.deleteOne()
//                 .then(note => {
//                     res.json({
//                         note: 'Task Deleted!',
//                         id: note.id
//                     });
//                 })
//                 .catch(err => {
//                     next(boom.internal(err))
//                 });

//         if (!note)
//             next(boom.notFound())

//         else if (note.userId !== userId)
//             next(boom.notFound())

//         // if the note is archived, delete it first
//         else if (note.archived) {
//             fileDeleteHelper(note, (err) => {
//                 if (err) {
//                     next(boom.internal(err))
//                 }
//                 else {
//                     deleteTask()
//                 }
//             })
//         }
//         else {
//             deleteTask()
//         }

//     });
// }
