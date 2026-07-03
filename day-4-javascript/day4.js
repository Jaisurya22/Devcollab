
const tasks = [
  { id: 1, title: "Fix login button", priority: "high", status: "open" },
  { id: 2, title: "Add dark mode", priority: "low", status: "open" },
  { id: 3, title: "Write unit tests", priority: "medium", status: "in-progress" },
  { id: 4, title: "Deploy to production", priority: "critical", status: "done" },
  { id: 5, title: "Update README", priority: "low", status: "done" }
]

tasks.forEach(function(task) {
    console.log(task.title)
})

function showall(){
    console.log("==All tasks ==")
    tasks.forEach(task => console.log(`ID: ${task.id}, Title: ${task.title}, Priority: ${task.priority}, Status: ${task.status}`))
}

showall()