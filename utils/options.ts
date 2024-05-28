const options = [
    {
        label: "Programming Languages",
        options: [
            { value: "java", label: "Java" }, { value: "python", label: "Python" }, { value: "javascript", label: "Javacript" },
            { value: "C++", label: "C++" }, { value: "C#", label: "C#" }, { value: "ruby", label: "Ruby" },
            { value: "php", label: "PHP" }, { value: "swift", label: "Swift" }, { value: "kotlin", label: "Kotlin" },
            { value: "typescript", label: "Typescript" }, { value: "GO", label: "GO" }, { value: "rust", label: "Rust" }
        ]
    },
    {
        label: "Web Development Framework",
        options: [
            { value: "react.js", label: "React.js" }, { value: "angular", label: "Angular" }, { value: "node.js", label: "Node.js" },
            { value: "vue.js", label: "Vue.js" }, { value: "django", label: "Django" }, { value: "flask", label: "Flask" },
            { value: "laravel", label: "Laravel" }, { value: "asp.net", label: "ASP.NET" }, { value: "spring boot", label: "Spring Boot" }
        ]
    },
    {
        label: "Mobile Development",
        options: [
            { value: "iOS dev", label: "iOS development(Swift, Objective-C)" }, { value: "android dev", label: "Android Development(Java, Kotlin)" },
            { value: "react-native", label: "React-Native" }, { value: "flutter", label: "Flutter" }
        ]
    },
    {
        label: "Database Technologies",
        options: [
            { value: "sql", label: "SQL" }, { value: "mysql", label: "MySQL" }, { value: "postgreSQL", label: "PostgreSQL" },
            { value: "mongoDB", label: "MOngoDB" }, { value: "oracle", label: "Oracle" }, { value: "sqlite", label: "SQLite" },
            { value: "redis", label: "Redis" }, { value: "cassandra", label: "Cassandra" }
        ]
    },
    {
        label: "Cloud Computing",
        options: [
            { value: "aws", label: "Amazon Web Services(AWS)" }, { value: "azure", label: "Azure" }, { value: "googlecloud", label: "Google Cloud Platform(GCP)" },
            { value: "docker", label: "Docker" }, { value: "kubernetes", label: "Kurbenetes" }, { value: "terraform", label: "Terraform" },
            { value: "ansible", label: "Ansible" }
        ]
    },
    {
        label: "DevOps",
        options: [
            { value: "continous integration/continous deployment(CI/CD)", label: "Continous Integration/Continous Deployment(CI/CD)" }, { value: "jenkins", label: "Jenkins" }, { value: "git", label: "Git" },
            { value: "Docker", label: "Docker" }, { value: "Kurbenetes", label: "Kurbenetes" }, { value: "Terraform", label: "Terraform" },
            { value: "ansible", label: "Asnible" }, { value: "puppet", label: "Puppet" }, { value: "chef", label: "Chef" }, { value: "aws-cf", label: "AWS Cloudformation" }
        ]
    },
    {
        label: "Software Development Methodologies",
        options: [
            { value: "agile", label: "Agile" }, { value: "scrum", label: "Scrum" }, { value: "kanban", label: "Kanban" },
            { value: "lean", label: "Lean" }, { value: "waterfall", label: "Waterfall" }
        ]
    },
    {
        label: "FrontEnd Development",
        options: [
            { value: "html5", label: "HTML5" }, { value: "css3", label: "CSS3" }, { value: "sass/less", label: "Sass/Less" },
            { value: "bootstrap", label: "Bootstrap" }, { value: "materialUI", label: "Material UI" }, { value: "responsive web design", label: "Responsive Web Design" }
        ]
    },
    {
        label: "BackEnd Development",
        options: [
            { value: "restful api", label: "RESTful API Design" }, { value: "graphql", label: "GraphQL" }, { value: "microservices architecture", label: "Microservices Architecture" },
            { value: "serverless computing", label: "Serverless Computing" }
        ]
    },
    {
        label: "Version Control",
        options: [
            { value: "git", label: "Git" }, { value: "github", label: "GitHub" }, { value: "bitbucket", label: "BitBucket" },
            { value: "gitlab", label: "GitLab" }
        ]
    },
    {
        label: "Testing And Quality Asuurance",
        options: [
            { value: "Test-Driven Development", label: "Test-Driven Development(TDD)" }, { value: "Behavior-Driven Development", label: "Behavior-Driven Development(BDD)" }, { value: "Unit Testing", label: "Unit Testing" },
            { value: "Integration Testing", label: "Integration Testing" }, { value: "End-to-End Testing", label: "End-to-End Testing" }, { value: "Test Automation", label: "Test Automation" },
            { value: "Selenium", label: "Selenium" }, { value: "Jest", label: "Jest" }, { value: "-JUnit", label: "-JUnit" }
        ]
    },
    {
        label: "Software Engineering Tools",
        options: [
            { value: "IDEs", label: "IDEs (Integrated Development Environments) such as Visual Studio Code, IntelliJ IDEA, Eclipse" }, { value: "Code Editors", label: "Code Editors like Sublime Text, Atom" },
            { value: "Version Control Systems", label: "Version Control Systems like Git, SVN" }, { value: "Issue Tracking Systems", label: "Issue Tracking Systems like Jira, Trello" },
            { value: "Collaboration Tools", label: "Collaboration Tools like Slack, Microsoft Teams" }
        ]
    },
    {
        label: "Other Technical Skills",
        options: [
            { value: "Object-Oriented Programming", label: "Object-Oriented Programming (OOP)" }, { value: "Data Structures and Algorithms", label: "Data Structures and Algorithms" },
            { value: "artificial intelligence", label: "Artificial Intelligence (AI)" }, { value: "Machine Learning and Data Science", label: "Machine Learning and Data Science (if relevant)" },
            { value: "Software Design Patterns", label: "Software Design Patterns" }, { value: "Natural Language Processing", label: "Natural Language Processing (NLP)" }, { value: "Computer Vision", label: "Computer Vision" },
            { value: "Big Data Technologies", label: "Big Data Technologies (Hadoop, Spark)" }, { value: "Cybersecurity Principles", label: "Cybersecurity Principles" },
        ]
    },
    {
        label: "Soft Skills",
        options: [
            { value: "Communication Skills", label: "Communication Skills" }, { value: "Teamwork and Collaboration", label: "Teamwork and Collaboration" }, { value: "Problem-Solving Abilities", label: "Problem-Solving Abilities" },
            { value: "Time Management", label: "Time Management" }, { value: "Adaptability", label: "Adaptability" }, { value: "Leadership Skills", label: "Leadership Skills" },
            { value: "Creativity", label: "Creativity" }, { value: "Critical Thinking", label: "Critical Thinking" }
        ]
    },
    {
        label: "Product Management Skills",
        options: [
            { value: "Product Strategy", label: "Product Strategy" }, { value: "Market Analysis", label: "Market Analysis" }, { value: "Product Planning", label: "Product Planning" },
            { value: "User-Centric Design", label: "User-Centric Design" }, { value: "Agile Methodologies", label: "Agile Methodologies" }, { value: "Stakeholder Management", label: "Stakeholder Management" },
            { value: "Data-Driven Decision Making", label: "Data-Driven Decision Making" }, { value: "Product Launch", label: "Product Launch" }, { value: "Product Lifecycle Management", label: "Product Lifecycle Management" },
            { value: "Communication Skills", label: "Communication Skills" }
        ]
    },
    {
        label: "Project Management Skills",
        options: [
            { value: "Project Planning", label: "Project Planning" }, { value: "Resource Management", label: "Resource Management" }, { value: "Risk Management", label: "Risk Management" },
            { value: "Task and Time Management", label: "Task and Time Management" }, { value: "Team Leadership", label: "Team Leadership" }, { value: "Communication and Collaboration", label: "Communication and Collaboration" },
            { value: "Quality Management", label: "Quality Managementy" }, { value: "Change Management", label: "Change Management" },
            { value: "Conflict Resolution", label: "Conflict Resolution" }, { value: "Performance Monitoring", label: "Performance Monitoring" },
        ]
    },
];

export default options;