import {
    docker,
    kubernetes,
    aws,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl:kubernetes ,
        name: "Kubernetes",
        type: "DevOps",
    },
     {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Surinderpro',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/surinder-jungral-b92936225/',
    }
];

export const projects = [
    {
        name: 'Pinterest Clone',
        description: '🚀✨ Excited to unveil my Pinterest Clone—a blend of creativity and functionality! Crafted with backend expertise, it offers seamless content curation, fast load times, and robust security. Explore inspiration anytime, anywhere! 🌟📌',
        link: 'https://www.linkedin.com/posts/surinder-jungral-b92936225_techinnovation-backenddevelopment-creativityunleashed-activity-7142077992503070720-nFgh?utm_source=share&utm_medium=member_desktop',
    },
    {
        name: 'Pod Replication with Image Variants',
        description: 'Empowered by Kubernetes, my latest project ensures seamless project continuity. With automated scaling and rapid recreation capabilities, it safeguards against failures, guaranteeing uninterrupted services. 🚀',
        link: 'https://www.linkedin.com/posts/surinder-jungral-b92936225_kubernetes-podreplication-containerization-activity-7141368040968949761-RSqg?utm_source=share&utm_medium=member_desktop',
    },
    {
        name: 'Modern Website',
        description: 'Crafted a cutting-edge website using HTML, CSS, JS, GSAP, Three.js, and ScrollTrigger. Elevating user experience with dynamic animations and immersive design elements. 🌐✨',
        link: 'https://www.linkedin.com/posts/surinder-jungral-b92936225_webdevelopment-innovation-javascript-activity-7122682160049733633-voSV?utm_source=share&utm_medium=member_desktop',
    },
    {
        name: 'Amazon Clone',
        description: 'Crafted from the ground up using pure HTML and CSS, my Amazon-inspired website combines sleek design with functionality, offering a user-friendly experience reminiscent of the e-commerce giant. 🌐🛍️',
        link: 'https://surinderpro.github.io/Amazon-Clone/',
    },
    {
        name: 'Netflix Clone',
        description: 'Dive into my Netflix Clone, crafted with HTML, CSS, and JavaScript. Immerse yourself in a visually stunning and user-friendly interface, bringing the essence of Netflix to life. 🎬✨',
        link: 'https://surinderpro.github.io/Netflix-Clone/',
    },
    {
        name: 'Real-time Chat Chord ',
        description: '⚡ Unveiling Chat Chord: My latest creation in real-time communication! 🌐 Built from the ground up with Node.js, Express, and WebSockets for a fluid, refresh-free chatting experience. Elevate your connectivity game now! 💬✨',
        link: 'https://www.linkedin.com/posts/surinder-jungral-b92936225_chatchord-realtimecommunication-nodejs-activity-7129786492012380160-shlZ?utm_source=share&utm_medium=member_desktop',
    }
];
