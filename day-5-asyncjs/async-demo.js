// Day 5: Async JavaScript - Promises, async/await, fetch

// ============================================
// 1. PROMISES - The foundation of async JS
// ============================================

// A Promise represents a value that will be available later
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Completed after ${ms}ms`);
        }, ms);
    });
};

// Using .then() chain
console.log("Starting promise chain...");
delay(500)
    .then(result => {
        console.log(result); // "Completed after 500000ms"
        return delay(300);
    })
    .then(result => {
        console.log(result); // "Completed after 300ms"
        return delay(200);
    })
    .then(result => {
        console.log(result); // "Completed after 200ms"
        console.log("Promise chain done!");
    });

// ============================================
// 2. ASYNC/AWAIT - Cleaner syntax for promises
// ============================================

async function runTasks() {
    console.log("\nStarting async/await tasks...");
    
    const result1 = await delay(300);
    console.log(result1);
    
    const result2 = await delay(200);
    console.log(result2);
    
    const result3 = await delay(100);
    console.log(result3);
    
    console.log("Async/await tasks done!");
}

// Run the async function
runTasks();

// ============================================
// 3. FETCH API - Calling real APIs
// ============================================

// Fetching from Remotive jobs API
async function fetchJobs() {
    console.log("\nFetching jobs from Remotive API...");
    
    try {
        const response = await fetch('https://remotive.io/api/remote-jobs');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Display first 3 jobs
        console.log(`Total jobs found: ${data.jobs.length}`);
        console.log("\nFirst 3 jobs:");
        
        data.jobs.slice(0, 3).forEach((job, index) => {
            console.log(`${index + 1}. ${job.title} at ${job.company_name} (${job.candidate_required_location})`);
        });
        
        return data.jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
    }
}

// Call the fetch function
fetchJobs();

// ============================================
// 4. ERROR HANDLING with try/catch
// ============================================

async function fetchWithErrorHandling() {
    try {
        const response = await fetch('https://remotive.io/api/remote-jobs');
        
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const data = await response.json();
        return data.jobs;
    } catch (error) {
        console.error("Caught error:", error.message);
        return []; // Return empty array on error
    }
}

// ============================================
// 5. PARALLEL REQUESTS with Promise.all
// ============================================

async function fetchMultipleEndpoints() {
    // Example: fetching from multiple APIs at once
    const urls = [
        'https://remotive.io/api/remote-jobs',
        'https://jsonplaceholder.typicode.com/users/1',
        'https://jsonplaceholder.typicode.com/posts/1'
    ];
    
    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url))
        );
        
        const results = await Promise.all(
            responses.map(res => res.json())
        );
        
        console.log("\nParallel requests completed:");
        console.log(`Jobs API: ${results[0].jobs.length} jobs`);
        console.log(`User API: ${results[1].name}`);
        console.log(`Post API: ${results[2].title}`);
        
    } catch (error) {
        console.error("Parallel fetch error:", error);
    }
}

// ============================================
// 6. ASYNC PATTERNS FOR DEVCOLLAB TASKS
// ============================================

// Simulating API calls for task operations
const taskApi = {
    // Simulate fetching tasks from backend
    async getTasks() {
        await delay(100); // Simulate network delay
        return [
            { id: 1, title: "Fix login button", priority: "high", status: "open" },
            { id: 2, title: "Add dark mode", priority: "low", status: "open" },
            { id: 3, title: "Write unit tests", priority: "medium", status: "in-progress" }
        ];
    },
    
    // Simulate creating a task
    async createTask(taskData) {
        await delay(50);
        return { id: Date.now(), ...taskData, createdAt: new Date().toISOString() };
    },
    
    // Simulate updating a task
    async updateTask(id, updates) {
        await delay(50);
        return { id, ...updates, updatedAt: new Date().toISOString() };
    },
    
    // Simulate deleting a task
    async deleteTask(id) {
        await delay(50);
        return { success: true, id };
    }
};

// Demo: Using the task API
async function demoTaskApi() {
    console.log("\n=== Task API Demo ===");
    
    // GET tasks
    const tasks = await taskApi.getTasks();
    console.log("Current tasks:", tasks);
    
    // CREATE task
    const newTask = await taskApi.createTask({
        title: "Deploy to production",
        priority: "critical",
        status: "open"
    });
    console.log("Created task:", newTask);
    
    // UPDATE task
    const updated = await taskApi.updateTask(1, { status: "done" });
    console.log("Updated task:", updated);
    
    // DELETE task
    const deleted = await taskApi.deleteTask(2);
    console.log("Deleted task:", deleted);
}

demoTaskApi();

console.log("\n=== Day 5 async demo complete ===");