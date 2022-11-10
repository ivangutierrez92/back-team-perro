let admin = [
  {
    name: "Ivan",
    lastName: "Gutierrez",
    role: "admin",
    photo:
      "https://media-exp1.licdn.com/dms/image/C4E03AQE0bI3QoP9LMA/profile-displayphoto-shrink_800_800/0/1541297859453?e=2147483647&v=beta&t=tNjWhYq9FVo3Iqvi8isjvQHNQ0YgQ0RhHwXvMZPRtjo",
    age: 23,
    email: "ivancito@gmail.com",
    password: "03034567",
    code: "WLBLRVNF",
    verified: true,
    logged: true,
  },
  {
    name: "Cristian",
    lastName: "Hermosa",
    role: "admin",
    photo:
      "https://lh3.googleusercontent.com/2rQ0suFiLzMw6rKhfUv48bDemvqqMHK_bhUlgRwNFQqdIjimGm81tcEUSPrpN5wfpKObIg4xWXySLykqxVtt18rDmOnjLlz_xPchMR5dZyciSYan82F4LFSCm-GNVFt9aAWvpam4r6DpH0HNrZmJN4PLUx1fARfg_LG53tok_HEM8k9_k28iPoAj9kyPfP1lRll2sSma7YDsibCmwjwKyZk7LPnquyy9c3PwgZypIFhfCV4STDkxq95rLvfV9c6zA7rUAAJBqdUivXf3MmmmfFftvvauls4FvJ1KG4VXBp7TIJn8IMoMhYiQJRQ6mx6GNYpPlx5vP1M5VOFlQVbK7WBn9nN7hMhFpzYuZzRYEakL7L57fzxeW4e2tyQmKeY5_h3Vn0vdH-4eaQf5fCpfopxxqEfk5HMbubxmao3MFfLolLgARY4Cn5KZ6jTA3NlNZ9QrIcNqq_ZLVylrnftZJB2u_TeEnF2A6VdM951FWTtL4e-9ytv7ladJJxXSHZzRsJ0uYrjt9RTuK4-ypnUS6NFhBFCyc-o2XcBu2a9Iifak7Lz5q6P9LTjJF59eL77tHHpMI5bJWB9zBnwjGY0wVauBpCSeM1CB7X3rEwczEJnZtDzp71w9NWguW6GiR7QDsag6mH4ctfHmaclbYaJZtuZep0Lozqm09O7pV4rTQtGQ2jvNJty7NHT3rG8VZDNHDABfKObJo1fBkaoMv5Xh24U1H3G9hs4RDTCXbs2PiF2SFIKY5joYHCRHP4L7a8oQ1GjMiMAVAW6mzeUKjM1N57jBbNsp6X2itfAGD1epmLYcPUdFvEToV4faBDjgP7wx27yJ3s52bEWiRlMy-4zN6khrcPF-kQS7TXPDlrjpNGG6dgTogWl1Kg0Rsl-xr_oNrq9e9S6jTl5HCRn0H3fvBAdMgNuIi6mVVPXPspFr20N07b-IKPOVEWp7a_GKRCT0HpE--VIMBFd8v77VblY=w309-h343-no?authuser=0",
    age: 35,
    email: "cristian@gmail.com",
    password: "12345678",
    code: "VGB4JTNF",
    verified: true,
    logged: true,
  },
  {
    name: "Roberto",
    lastName: "Gomez",
    role: "admin",
    photo:
      "https://sc2.elpais.com.uy/files/article_default_content/uploads/2020/06/29/5efa9e7544bf1.jpeg",
    age: 35,
    email: "rgomez@gmail.com",
    password: "12345678",
    code: "3K2HE3NU",
    verified: true,
    logged: true,
  },
  {
    name: "Federico",
    lastName: "Smith",
    role: "admin",
    photo:
      "https://static.wikia.nocookie.net/doblaje/images/4/4f/Harrydunne.jpg/revision/latest?cb=20150906032704&path-prefix=es",
    age: 25,
    email: "federico@aol.com",
    password: "12345678",
    code: "5V8ACCGG",
    verified: true,
    logged: true,
  },
];

require("dotenv").config();
require("../database");
const User = require("../../models/User");

admin.forEach((element) => {
  User.create({
    name: element.name,
    lastName: element.lastName,
    role: element.role,
    photo: element.photo,
    age: element.age,
    email: element.email,
    password: element.password,
    code: element.code,
    verified: element.verified,
    logged: element.logged,
  });
});
