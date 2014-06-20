/**
 * Created by artem on 6/17/14.
 */

(function () {

    var app = angular.module('cv', []);

    app.controller('WorkController', function () {
        this.workExp = workExpData;
        this.studies = studiesData;
        this.languages = languagesData;
        this.additions = additionsData;
        this.interests = interestsData;
        this.progLangs = progLangsData;
        this.techs = techsData;

        this.getExp = function(val){
            switch (val){
                case 0:
                    return "Beginner";
                case 1:
                    return "Middle";
                case 2:
                    return "Advanced";
            }
        };
    });

    var workExpData = [
        {
            company: "Cliqz",
            site: "www.cliqz.com",
            title: "Senior Software Developer",
            city: "München, Germany",
            desc: "Backend-development, Search engine",
            img:  "img/cliqz.png",
            start: "Feb 2014",
            end: "Present",
            resp: [
                "Project owner - 'People Search' : part of the search engine, that finds people",
                "Python back-end development",
                "Project scale management",
                "Research and Development with fast iterations"
            ]
        },
        {
            company: "Siemens R&D",
            title: "Master Thesis Student - Machine learning in semantic web",
            site: "www.siemens.com/innovation/en/",
            city: "München, Germany",
            desc: "Research and Development",
            img:  "img/siemens.jpg",
            start: "July 2013",
            end: "Jan 2014",
            resp: [
                "Master Thesis: Integrating Machine Learning and Semantic Network techniques for Question Answering over the Linked Data Cloud",
                "Natural Language Processing",
                "Big Data analysis",
                "Question-Answering system",
                "Research & Development"
            ]
        },
        {
            company: "NEXT Munich GmbH. The App Agency",
            title: "Senior Developer",
            site: "www.next-munich.com",
            city: "München, Germany",
            desc: "Mobile Developer (Android, IPhone) & Google App Engine",
            img:  "img/nm_logo.jpeg",
            start: "July 2012",
            end: "July 2013",
            resp: [
                "Android, IPhone apps development",
                "Back-end & Web site development using GAE and Slim3",
                "Research & Development"
            ]
        },
        {
            company: "digitalmobil GmbH & Co KG",
            title: "Android Developer - Freelance",
            site: "www.digitalmobil.com",
            city: "München, Germany",
            desc: "Mobile Apps Developer (Backend + Frontend)",
            img:  "img/digitalmobil_logo.png",
            start: "June 2011",
            end: "June 2012",
            resp: [
                "Android apps development",
                "ASP.Net back-end development",
                "Small outsource team leading"
            ]
        },
        {
            company: "Layar - Augmented Reality browser",
            title: "Android Augmented-Reality Developer",
            site: "www.layar.com",
            city: "Kiev, Ukraine | Amsterdam, Netherlands",
            desc: "Android Developer",
            img:  "img/layar_logo.png",
            start: "April 2010",
            end: "April 2011",
            resp: [
                "Android full-circle app development",
                "Application graphical core with OpenGL",
                "Product development - new features and experiments"
            ]
        },
        {
            company: "CyberVision",
            title: "Java and C Developer - PartTime",
            site: "www.cybervisiontech.com",
            city: "Kiev, Ukraine",
            desc: "Java and C development of distributed applications",
            img:  "img/cyber_vision_logo.jpg",
            start: "May 2009",
            end: "May 2010",
            resp: [
                "Java distributed application development",
                "C development (TV broadcasting application for different platforms)",
                "R&D group - investigation in mobile technologies"
            ]
        },
        {
            company: "Fun Soft - Freelance Projects",
            title: "Self-employed developer - Freelance Projects",
            city: "Kiev, Ukraine",
            desc: "Various mobile, web and desktop apps",
            start: "May 2009",
            end: "May 2010",
            resp: [
                "Finding customers",
                "ASP.Net web sites development",
                ".Net desktop apps",
                "J2ME mobile apps"
            ]
        }
    ];

    var studiesData = [
        {
            title: "M.Sc in Informatics",
            org: "Technische Universität München",
            city: "München",
            country: "Germany",
            department: "Department of Informatics",
            start: 2011,
            end: 2013
        },
        {
            title: "B.Sc in Computer Science",
            org: "International Solomon university",
            city: "Kiev",
            country: "Ukraine",
            department: "Department of Computer Science",
            start: 2006,
            end: 2010

        },
        {
            title: "Secondary education",
            org: "Gymnasium #1",
            city: "Simferopol",
            country: "Ukraine",
            start: 1996,
            end: 2006
        }
    ];

    var languagesData = [
        {
            lang: "Russian",
            lvl: "Native"
        },
        {
            lang: "Ukrainian",
            lvl: "Native"
        },
        {
            lang: "English",
            lvl: "Fluent"
        },
        {
            lang: "German",
            lvl: "Fluent"
        }
    ];

    var additionsData = [
        "Graduate ranking: 3rd from 23",
        "State student’s Olympiad in System Programming participant",
        "HTC Android Contest participant",
        "GTUG (Kiev and München) speaker and participant",
        "Scrum working experience"
    ];

    var interestsData = [
        "GameDev",
        "Project Management",
        "Augmented Reallity",
        "Artificial Neural Networks",
        "Biotechnologies, bioinformatics",
        "Genetic researches and engineering",
        "Distributed applications development",
        "OpenGL, OpenGL ES",
        "Android Development"
    ];

    var progLangsData = [
        {
            title: "Java",
            lvl: 2,
            exp: "4 years"
        },
        {
            title: "Python",
            lvl: 1,
            exp: "6 months"
        },
        {
            title: ".Net",
            lvl: 1,
            exp: "1 year"
        },
        {
            title: "C, C++",
            lvl: 1,
            exp: "2 years"
        },
        {
            title: "JavaScript",
            lvl: 0,
            exp: "4 months"
        }
    ];

    var techsData = [
        {
            title: "Android",
            lvl: 2,
            exp: "3 years"
        },
        {
            title: "Lucene, ElasticSearch",
            lvl: 2,
            exp: "1 year"
        },
        {
            title: "MS .Net Framework 2.0-3.5",
            lvl: 2,
            exp: "1 year"
        },
        {
            title: "J2SE",
            lvl: 2,
            exp: "1 year"
        },
        {
            title: "Amazon Web Services",
            lvl: 1,
            exp: "6 months"
        },
        {
            title: "Google App Engine",
            lvl: 1,
            exp: "6 months"
        },
        {
            title: "OpenGL, DirectX, 3d graphics",
            lvl: 1,
            exp: "3 year"
        },
        {
            title: "Unity3d",
            lvl: 1,
            exp: "1 year"
        },
        {
            title: "iOS",
            lvl: 0,
            exp: "6 months"
        }

    ];

})();