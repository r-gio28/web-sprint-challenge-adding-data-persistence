exports.seed = async function(knex) {
    return await knex('tasks').insert([
        {
            task_description: 'task_1',
            task_notes: "project_1's first task",
            task_completed: false,
            project_id: 1,
        },
        {
            task_description: "task_2",
            task_notes: "project_1's second task",
            task_completed: false,
            project_id: 1,
        },
        {
            task_description: "task_3",
            task_notes: "project_1's third task",
            task_completed: false,
            project_id: 1,
        },
        {
            task_description: "task_4",
            task_notes: "project_2's first task",
            task_completed: true,
            project_id: 2,
        },
        {
            task_description: "task_5",
            task_notes: "project_3's first task",
            task_completed: false,
            project_id: 3,
        },
        {
            task_description: "task_6",
            task_notes: "project_3's second task",
            task_completed: false,
            project_id: 3,
        },
    ])
}