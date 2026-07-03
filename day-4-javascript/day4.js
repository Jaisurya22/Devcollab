const tasks = [
  { id: 1, title: "Fix login button", priority: "high", status: "open" },
  { id: 2, title: "Add dark mode", priority: "low", status: "open" },
  { id: 3, title: "Write unit tests", priority: "medium", status: "in-progress" },
  { id: 4, title: "Deploy to production", priority: "critical", status: "done" },
  { id: 5, title: "Update README", priority: "low", status: "done" }
]
/*
let openTasks = []
tasks.forEach(function(task){
    if(task.status === "open"){
        openTasks.push(task)
    }
})
console.log("Open tasks:")

function showHighPriorityTasks(){
    tasks.forEach((task) => {
        if(task.priority === "high" || task.priority === "critical"){
            console.log(`ID: ${task.id}, Title: ${task.title}, Priority: ${task.priority}, Status: ${task.status}`)
        }
    })      
}
showHighPriorityTasks()

function showIncompleteTasks(){
    tasks.forEach((task) => {
        if(task.status !== "done"){
            console.log(`ID: ${task.id}, Title: ${task.title}, Priority: ${task.priority}, Status: ${task.status}`)
        }
    })
}
showIncompleteTasks()


function getAlltitles(){
    const titles = tasks.map((task) => task.title)
    
    return titles   
}
console.log("All task titles:", getAlltitles())

function getOpenTitles(){
    const openTitles = tasks.filter((task) => task.status === "open").map((task) => task.title)
    return openTitles
}
console.log("Open task titles:", getOpenTitles())

const priorityLevel = { critical: 1, high: 2, medium: 3, low: 4 }

function sortTasksByPriority(){
    tasks.sort((a, b) => priorityLevel[a.priority] - priorityLevel[b.priority])
    console.log("Tasks sorted by priority:")
    tasks.forEach((task) => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Priority: ${task.priority}, Status: ${task.status}`)
    })
}
sortTasksByPriority()

*/



let first = tasks[0];
let {id, title, priority, status} = first;
console.log(`ID: ${id}, Title: ${title}, Priority: ${priority}, Status: ${status}`)


let newTask = { id: 6, title: "Test deployment", priority: "high", status: "open" }
let allTasks = [...tasks, newTask]
console.log("Total tasks:", allTasks.length)
allTasks.forEach(t => console.log(`#${t.id} - ${t.title}`))