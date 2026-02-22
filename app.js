// Define your data
const courseData = {
    general: {
        "All Materials":
            "https://drive.google.com/drive/folders/17_QvKJoGeuB55NZYhXlX89-tuMYh_OPm?usp=drive_link",
        "Harvard Case Studies":
            "https://drive.google.com/drive/folders/1IudOhXXRlrYgGF-3i10I2H90nD3aGms1?usp=drive_link",
        "Time Table":
            "https://drive.google.com/drive/folders/1Tq7jnVo55H9mYcAjBWPzVnDMcfN5hJ7I?usp=drive_link",
        "Exam Past Questions":
            "https://drive.google.com/drive/folders/1lA1r5xZLhKPX1aiZaIQ6LOQQUZS6M51K?usp=drive_link",
    },
    courses: [
        {
            name: "Course 1",
            resources: {
                "Case Studies":
                    "https://drive.google.com/drive/folders/COURSE1_CASE_STUDIES_LINK",
                "Learning Work Plan":
                    "https://drive.google.com/drive/folders/COURSE1_LEARNING_WORK_PLAN_LINK",
                Books: "https://drive.google.com/drive/folders/COURSE1_BOOKS_LINK",
                "Lecture Slides":
                    "https://drive.google.com/drive/folders/COURSE1_LECTURE_SLIDES_LINK",
                Assignment:
                    "https://drive.google.com/drive/folders/COURSE1_ASSIGNMENT_LINK",
                "Past Questions":
                    "https://drive.google.com/drive/folders/COURSE1_PAST_QUESTIONS_LINK",
            },
        },
        {
            name: "Course 2",
            resources: {
                "Case Studies": "#",
                "Learning Work Plan": "#",
                Books: "#",
                "Lecture Slides": "#",
                Assignment: "#",
                "Past Questions": "#",
            },
        },
        {
            name: "Course 3",
            resources: {
                "Case Studies": "#",
                "Learning Work Plan": "#",
                Books: "#",
                "Lecture Slides": "#",
                Assignment: "#",
                "Past Questions": "#",
            },
        },
        {
            name: "Course 4",
            resources: {
                "Case Studies": "#",
                "Learning Work Plan": "#",
                Books: "#",
                "Lecture Slides": "#",
                Assignment: "#",
                "Past Questions": "#",
            },
        },
        {
            name: "Course 5",
            resources: {
                "Case Studies": "#",
                "Learning Work Plan": "#",
                Books: "#",
                "Lecture Slides": "#",
                Assignment: "#",
                "Past Questions": "#",
            },
        },
    ],
};

const generalBlock = document.getElementById("general-block");

function populateGeneralHrefs() {
    if (generalBlock) {
        const generalMaterials = document.getElementById("general-materials");
        const generalCase = document.getElementById("general-case");
        const generalTimeTable = document.getElementById("general-time-table");
        const generalPastQuestions = document.getElementById(
            "general-past-questions",
        );

        if (
            !generalMaterials ||
            !generalCase ||
            !generalPastQuestions ||
            !generalTimeTable
        )
            return;

        generalMaterials.href = courseData.general["All Materials"];
        generalMaterials.target = "_blank";
        generalMaterials.rel = "noopener noreferrer";

        generalCase.href = courseData.general["Harvard Case Studies"];
        generalCase.target = "_blank";
        generalCase.rel = "noopener noreferrer";

        generalPastQuestions.href = courseData.general["Exam Past Questions"];
        generalPastQuestions.target = "_blank";
        generalPastQuestions.rel = "noopener noreferrer";

        generalTimeTable.href = courseData.general["Time Table"];
        generalTimeTable.target = "_blank";
        generalTimeTable.rel = "noopener noreferrer";
    } else {
        return;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    populateGeneralHrefs();
});
