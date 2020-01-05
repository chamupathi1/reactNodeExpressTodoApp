const express = require('express');

let tasksValidator = require('../validators/tasks.validator');
let tasksService = require('../services/tasks.service');

let tasksRoutes = express.Router();

// add a new task
tasksRoutes.route('/add').post(
    tasksValidator.validateAddTask,
    tasksService.addTask
);


// get all tasks of a user
// TODO: add pagination
tasksRoutes.route('/').get(
    tasksValidator.validateGetAllTasks,
    tasksService.getAllTasks
);


// get all completed tasks of a user
// TODO: add pagination
tasksRoutes.route('/completed').get(
    tasksValidator.validateGetActiveTasks,
    tasksService.getTasksCompleted,
);


// get all active tasks of a user
// TODO: add pagination
tasksRoutes.route('/active').get(
    tasksValidator.validateGetActiveTasks,
    tasksService.getTasksActive
);

// complete a task
tasksRoutes.route('/complete').post(
    tasksValidator.validateCompleteTask,
    tasksService.makeTaskCompleteById
)

// make a task active
tasksRoutes.route('/active').post(
    tasksValidator.validateActivateTask,
    tasksService.makeTaskActiveById
)

// make all tasks active
tasksRoutes.route('/makeAllActive').post(
    tasksValidator.validateMakeAllActive,
    tasksService.makeAllActive
)

// make all tasks complete
tasksRoutes.route('/makeAllcomplete').post(
    tasksValidator.validateMakeAllComplete,
    tasksService.makeAllCompleted
)

// // get a note by id
// tasksRoutes.route('/:userId/:id').get(
//     notesValidator.validateGetNotesById,
//     notesService.getNoteById
// );

// // update note
// tasksRoutes.route('/update').put(
//     notesValidator.validateUpdateNote,
//     notesService.updateNoteById
// );



// // unarchive a note
// tasksRoutes.route('/unarchive').post(
//     notesValidator.validateUnArchiveNote,
//     notesService.unArchiveNoteById
// )


// // delete note
// tasksRoutes.route('/delete').delete(
//     notesValidator.validateDeleteNote,
//     notesService.deleteANoteByUserIdandId);



module.exports = tasksRoutes;