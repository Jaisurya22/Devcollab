
const tasks = [
  { id: 1, title: "Fix login button", priority: "high", status: "open" },
  { id: 2, title: "Add dark mode", priority: "low", status: "open" },
  { id: 3, title: "Write unit tests", priority: "medium", status: "in-progress" },
  { id: 4, title: "Deploy to production", priority: "critical", status: "done" },
  { id: 5, title: "Update README", priority: "low", status: "done" }
]

function showall(){
    console.log("==All tasks ==")
    {
        tasks.forEach( tasks => console.log(`ID: ${tasks.id}, Title: ${tasks.title}, Priority: ${tasks.priority}, Status: ${tasks.status}`)
        
        
        
        )
        
    }
}