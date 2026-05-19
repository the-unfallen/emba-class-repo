// Define your data
const courseData = {
    general: {
        "All Materials":
            "https://drive.google.com/drive/folders/1REKcht6zIPT2J7yUHk637MiqBkPs22R7?usp=drive_link",
        "Harvard Case Studies":
            "https://drive.google.com/drive/folders/13JfdZAY-kmHxFYVZehD5dIlDDeQs1so9?usp=drive_link",
        "Time Table":
            "https://drive.google.com/drive/folders/1O6XlzPbPkqiLQp8pzDt11X9No1jBA0Tq?usp=drive_link",
        "Exam Past Questions":
            "https://drive.google.com/drive/folders/10fkgJXBRqHawXyLVs1R93vPAE_iCFH0W?usp=drive_link",
        "Exam Time Table":
            "https://drive.google.com/drive/folders/1kd5KUrp-5_C5ZRWM4yYn2HyJSwzwv0YO?usp=drive_link",
    },
    courses: [
        {
            name: "Course 1",
            resources: {
                "Case Studies":
                    "https://drive.google.com/drive/folders/15hNkRSg0__XZP2TuORsy6X9fORKTP0jN?usp=drive_link",
                "Learning Work Plan":
                    "https://drive.google.com/drive/folders/1Ewuy7BYUlEvh_dOLc4Yc7jL42UKf93YL?usp=drive_link",
                Books: "https://drive.google.com/drive/folders/1s98RoJ0Cy5fshjGXE3JWBM7sRq89w-SZ?usp=drive_link",
                "Lecture Slides":
                    "https://drive.google.com/drive/folders/1nJ4msZ6uEf3oKe4ocsaiKP1ISDC470a4?usp=drive_link",
                Assignment:
                    "https://drive.google.com/drive/folders/15ehMW4E9mjcL7ttRK4UHoNdjcsirPwvp?usp=drive_link",
                "Past Questions":
                    "https://drive.google.com/drive/folders/1c3bYohK3LdqW-fBeuU8XnspWQ_yOzhHS?usp=drive_link",
                "All materials":
                    "https://drive.google.com/drive/folders/1_gErZ5_I4kFbOJ7rIvvr1xhUiHFql5DT?usp=drive_link",
            },
        },
        {
            name: "Course 2",
            resources: {
                "Case Studies":
                    "https://drive.google.com/drive/folders/1eYuLDLK2SFjFhiy9gUqCrmBYOM0ocyTO?usp=drive_link",
                "Learning Work Plan":
                    "https://drive.google.com/drive/folders/1SOcjsS0rINJDSDqUKIJfrvxD7mGw3HtI?usp=drive_link",
                Books: "https://drive.google.com/drive/folders/1byUCzd00fgaXOEeZrwF7Aqomq5qxxDjc?usp=drive_link",
                "Lecture Slides":
                    "https://drive.google.com/drive/folders/1uQy4meGRUBFDEFBVPITjaS0XSejGpfL3?usp=drive_link",
                Assignment:
                    "https://drive.google.com/drive/folders/1cXcUU4XVicAAfSUIJp0gPj39yrfaLO1_?usp=drive_link",
                "Past Questions":
                    "https://drive.google.com/drive/folders/1fhW05Z8WrE9XQMeP4Lgf3kxlrtBcx8F9?usp=drive_link",
                "All materials":
                    "https://drive.google.com/drive/folders/18ZKR3CDwywnL1czyD9PpRmzRtHfcIKTk?usp=drive_link",
            },
        },
        {
            name: "Course 3",
            resources: {
                "Case Studies":
                    "https://drive.google.com/drive/folders/1eAM1ixSxMw0U6P3DSNLOlU2Fg9lvK1VZ?usp=drive_link",
                "Learning Work Plan":
                    "https://drive.google.com/drive/folders/1jiCPVK16tjFWpVfSv1xLDhEt-ibyn9Xq?usp=drive_link",
                Books: "https://drive.google.com/drive/folders/1s7lheozKP6aupM9Vq4x_fdyp8C55Gc9i?usp=drive_link",
                "Lecture Slides":
                    "https://drive.google.com/drive/folders/1xaf_g-mOmFzBSYYoOhMKf9XG28wAObc0?usp=drive_link",
                Assignment:
                    "https://drive.google.com/drive/folders/1AZSqvMHwSLfb6SgiOo-i_MRTcajh6-uz?usp=drive_link",
                "Past Questions":
                    "https://drive.google.com/drive/folders/1aD9XlvLwXDUaFVRh_i5eGICKM-CB_QTN?usp=drive_link",
                "All materials":
                    "https://drive.google.com/drive/folders/1_HdVPjrAlMDO1lkZ2S7UMWO0qEBrrCU1?usp=drive_link",
            },
        },
        {
            name: "Course 4",
            resources: {
                "Case Studies":
                    "https://drive.google.com/drive/folders/19ea3hiZ18Z_-EGA5N9ogMpE_5NMFM1SY?usp=drive_link",
                "Learning Work Plan":
                    "https://drive.google.com/drive/folders/1t4DPmL_lVtxVQ_AxBNTbpyDPPv85DuVA?usp=drive_link",
                Books: "https://drive.google.com/drive/folders/1eA_j-DcrpEZkFNfmUeLZdjegFeIZXgfK?usp=drive_link",
                "Lecture Slides":
                    "https://drive.google.com/drive/folders/1QmkO_wQQDuiOSDhHcQwy-BqO6XZyQrXg?usp=drive_link",
                Assignment:
                    "https://drive.google.com/drive/folders/1rHSofXxdfe8AKsXXxOqE0n9hrtQzs4O1?usp=drive_link",
                "Past Questions":
                    "https://drive.google.com/drive/folders/1B9f6LmW7QBhQG6zHYYHUjKUTulbYivfA?usp=drive_link",
                "All materials":
                    "https://drive.google.com/drive/folders/1GD-fvAUnf8L6Tj2MsQp_bQxPEdeEXBes?usp=drive_link",
            },
        },
        {
            name: "Course 5",
            resources: {
                "Case Studies":
                    "https://drive.google.com/drive/folders/1lxEXWjPUjpVGXh02PFn-yVPVRwTinfPw?usp=drive_link",
                "Learning Work Plan":
                    "https://drive.google.com/drive/folders/1L8zs18q8Xogb9FDelUfZ_Ary74TQmD0h?usp=drive_link",
                Books: "https://drive.google.com/drive/folders/1I7Xwl9VjKkPj6JaUnjoxsKhvrfW25mNw?usp=drive_link",
                "Lecture Slides":
                    "https://drive.google.com/drive/folders/1wDY8m8f9wv8-ut8JXlkVNSLVxd5FFc01?usp=drive_link",
                Assignment:
                    "https://drive.google.com/drive/folders/10LP6ADyhY9JiUIomCPL4MnjnK_yrYzN7?usp=drive_link",
                "Past Questions":
                    "https://drive.google.com/drive/folders/125ix_LppW7G_q1GN4SR6fnCvWh6Pi1yj?usp=drive_link",
                "All materials":
                    "https://drive.google.com/drive/folders/1MDhuWkaKG8cpReiN8CJFK1YWmJNxUAbg?usp=drive_link",
            },
        },
    ],
};

const generalBlock = document.getElementById("general-block");
const course1Block = document.getElementById("course-1-block");
const course2Block = document.getElementById("course-2-block");
const course3Block = document.getElementById("course-3-block");
const course4Block = document.getElementById("course-4-block");
const course5Block = document.getElementById("course-5-block");
const navBlock = document.getElementById("nav-bar");

const allCourseBlocks = [
    course1Block,
    course2Block,
    course3Block,
    course4Block,
    course5Block,
];

function populateGeneralHrefs() {
    if (generalBlock) {
        const generalMaterials = document.getElementById("general-materials");
        const generalCase = document.getElementById("general-case");
        const generalTimeTable = document.getElementById("general-time-table");
        const generalPastQuestions = document.getElementById(
            "general-past-questions",
        );
        const generalExamTimeTable = document.getElementById(
            "general-exam-time-table",
        );

        if (
            !generalMaterials ||
            !generalCase ||
            !generalPastQuestions ||
            !generalTimeTable ||
            !generalExamTimeTable
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

        generalExamTimeTable.href = courseData.general["Exam Time Table"];
        generalTimeTable.target = "_blank";
        generalTimeTable.rel = "noopener noreferrer";
    } else {
        return;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    populateNavbarLinks();
    populateGeneralHrefs();
    populateCourseBlocks();
});

function populateCourseBlocks() {
    allCourseBlocks.forEach((block, index) => {
        if (block) {
            block_id = block.id;
            block_index = block_id.split("-")[1];
            const courseName = "Course " + block_index;
            console.log({ courseName });
            const courseArray = courseData.courses;
            let courseResources;

            for (const resource of courseArray) {
                if (resource.name === courseName) {
                    courseResources = resource.resources;
                    break;
                }
            }

            console.log({ courseResources });

            block.innerHTML = `
                <div><a id="course-${block_index}-materials"  href="${courseResources["All materials"]}" target="_blank" rel="noopener noreferrer">All Materials</a></div>
                <div><a id="course-${block_index}-lecture-slides" href="${courseResources["Lecture Slides"]}" target="_blank" rel="noopener noreferrer">Lecture Slides</a></div>
                <div><a id="course-${block_index}-cases" href="${courseResources["Case Studies"]}" target="_blank" rel="noopener noreferrer">Course Case Studies</a></div>
                <div><a id="course-${block_index}-work-plan" href="${courseResources["Learning Work Plan"]}" target="_blank" rel="noopener noreferrer">Learning Work Plan</a></div>
                <div><a id="course-${block_index}-books" href="${courseResources.Books}" target="_blank" rel="noopener noreferrer">Books</a></div>
                <div><a id="course-${block_index}-assignments" href="${courseResources.Assignment}" target="_blank" rel="noopener noreferrer">Assignments</a></div>
                <div><a id="course-${block_index}-past-questions" href="${courseResources["Past Questions"]}" target="_blank" rel="noopener noreferrer">Past Questions</a></div>
            
            `;
        }
    });
}

function populateNavbarLinks() {
    if (!navBlock) return;
    navBlock.innerHTML = `
        <a href="course1.html">831</a>
        <a href="course2.html">832</a>
        <a href="course3.html">833</a>
        <a href="course4.html">834</a>
        <a href="course5.html">835</a>
    `;
}
