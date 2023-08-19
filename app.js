const getElement = (elem) => {
    return document.querySelector(elem);
}
// SWITCHING OF MAIN CONTENT/MENU AND MENU ACTIVE STATE
const sideMenu = [
    {
        menu: getElement('.menu-hot-jobs'),
        content: getElement('.hot-jobs-content')
    },
    {
        menu: getElement('.menu-police'),
        content: getElement('.police-content')
    },
    {
        menu: getElement('.menu-ems'),
        content: getElement('.ems-content')
    },
]
sideMenu.map((item) => {
    item.menu.addEventListener('click', () => {
        item.menu.classList.add('menu-active');
        item.content.classList.remove('hide-content');
        let otherMenu = sideMenu.filter((i) => i.menu !== item.menu)
        otherMenu.map((i) => {
            i.content.classList.add('hide-content');
            i.menu.classList.remove('menu-active');
        })
    })
})
let totalJobs = 100
let wallet = 150.000
getElement('.totaljobs').textContent = totalJobs;
getElement('.walletbalance').textContent = wallet.toFixed(3);
// HOT-JOBS
let joblist = getElement('.hot-jobs-list')
let jobs = [
    {
        role: "taxi driver",
        company: "parallel taxi",
        wagePerHour: "14"
    },
    {
        role: "garbage collector",
        company: "parallel city",
        wagePerHour: "16"
    },
    {
        role: "delivery driver",
        company: "amazon",
        wagePerHour: "13"
    },
    {
        role: "courier",
        company: "parallel mail",
        wagePerHour: "16"
    },
    {
        role: "sorting center worker",
        company: "parallel mail",
        wagePerHour: "14"
    },
]
const uploadJobs = (data) => {
    joblist.innerHTML = '';
    data.map((job) => {
        const {role, company, wagePerHour} = job
        joblist.innerHTML += `
        <section>
            <div>
                <p>${role}</p>
                <span class="upper">${company}</span>
            </div>
            <div>
                <p>$${wagePerHour}</p>
                <span class="cap">per hour</span>
            </div>
            <div class="flexlittle">
                <button class="pointer bold fs">GET JOB</button>
                <div class="location-svg pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group">
                    <path id="Vector" d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6755 19.2869 15.7128 20.0956 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6445 22.0818 12.325 22.1663 12 22.1663C11.675 22.1663 11.3555 22.0818 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42298 20.2083 7.38707 19.3489 6.442 18.395C4.676 16.588 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8Z" fill="#CDB5FF" fill-opacity="0.5"/>
                    </g>
                    </svg>
                </div>
            </div>
        </section>
        `
    })
}
uploadJobs(jobs);

// POLICE
// INPUT ACTIVE STATE
getElement('#policeapplicationname').addEventListener('focus', () => {
    getElement('#inputbox').classList.add('inputactive')
})
getElement('#policeapplicationname').addEventListener('focusout', () => {
    getElement('#inputbox').classList.remove('inputactive')
})
getElement('#policeapplicationabout').addEventListener('focus', () => {
    getElement('#textareabox').classList.add('inputactive')
})
getElement('#policeapplicationabout').addEventListener('focusout', () => {
    getElement('#textareabox').classList.remove('inputactive')
})
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const departments = ['delivery', 'crime', 'civil', 'homicide', 'legal', 'swat']
const pushDaysDropDown = (name) => {
    days.map((day) => {
        getElement(`.${name}workscheduledropdown`).innerHTML += `
        <div class="${name}work${day}" onclick="selectOption('.${name}work${day}','${name}work', '${day}')">
            <h4>${day}</h4>
            <span class="checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" class="${name}work${day}check hidden" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.63636 12L3 8.19048L4.27273 6.85714L6.63636 9.33333L11.7273 4L13 5.33333L6.63636 12Z" fill="black"/>
            </svg>
            </span>
        </div>
        `
    })
}
pushDaysDropDown('police');
const pushDepartmentsDropDown = (name) => {
    departments.map((department) => {
        getElement(`.${name}departmentscheduledropdown`).innerHTML += `
        <div class="${name}department${department}" onclick="selectOption('.${name}department${department}','${name}department', '${department}')">
            <h4>${department}</h4>
            <span class="checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" class="${name}department${department}check hidden" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.63636 12L3 8.19048L4.27273 6.85714L6.63636 9.33333L11.7273 4L13 5.33333L6.63636 12Z" fill="black"/>
            </svg>
            </span>
        </div>
        `
    })
}
pushDepartmentsDropDown('police')
const closeDropDown = (name) => {
    getElement(name).classList.remove('activedropdown');
    getElement(name + 'dropdown').classList.add('hidden');
    getElement(name + 'dropdown').classList.remove('daysdropdown');
}
const toggleDropDown = (name) => {
    getElement(name).classList.toggle('activedropdown');
    getElement(name + 'dropdown').classList.toggle('hidden');
    getElement(name + 'dropdown').classList.toggle('daysdropdown');
    if(name === '.policeworkschedule'){
        closeDropDown('.policedepartmentschedule')
    } else if(name === '.policedepartmentschedule'){
        closeDropDown('.policeworkschedule')
    }
}
let policeRequest = {
    name: '',
    about: '',
    preferredWorkSchedule: [],
    preferredDepartment: [],
    trip: false,
    rework: false
}
const getRequest = () => {
    policeRequest.name = getElement('#policeapplicationname').value.toLowerCase();
    policeRequest.about = getElement('#policeapplicationabout').value.toLowerCase();
    refreshPoliceForm()
}
const refreshPoliceForm = () => {
    policeRequest = {
        name: '',
        about: '',
        preferredWorkSchedule: [],
        preferredDepartment: [],
        trip: false,
        rework: false
    }
    getElement('#policeapplicationname').value = ''
    getElement('#policeapplicationabout').value = ''
    getElement('.policereworkcheck').classList.add('hidden')
    getElement('.policetripcheck').classList.add('hidden')
    days.map((day) => {
        getElement(`.policework${day}check`).classList.add('hidden');
    })
    departments.map((department) => {
        getElement(`.policedepartment${department}check`).classList.add('hidden');
    })
}
// EMS 
const stepsWithQuestions = [
    [
        {
            title: "Your Name1",
            type: 'input',
            id:"applicantname"
        },
        {
            title: "Briefly About You",
            type: 'textarea',
            id:"applicantabout"
        },
        {
            title: "Country",
            type: 'input',
            id:"applicantcountry"
        },
    ],
    [
        {
            title: "Input and Textarea working now2",
            type: 'input',
            id:"testing"
        },
        {
            title: "Everybody needs to chilll",
            type: 'textarea',
            id:"everybodychill"
        },
        {
            title: "Gender",
            type: 'dropdown',
            id:"genderdropdown",
            dropdowncontents: ['male', 'female'],
            dropdowntitle: "gender"
        },
    ],
    [
        {
            title: "Your region",
            type: 'dropdown',
            id:"regiondropdown",
            dropdowncontents: ['north', "west", "south", "east"],
            dropdowntitle: "region"
        },
        {
            title: "chill first",
            type: 'textarea',
            id:"applcheck"
        },
        {
            title: "State",
            type: 'input',
            id:"state"
        },
    ],
]
const totalsteps = stepsWithQuestions.length
let steps = []
let classCount = 1
const pushSteps = (data) => {
    data.map((step) => {
        document.querySelector('#ems-steps-container').innerHTML += `
        <div class='step${classCount} ems-steps ${classCount === 1 ? '' : 'hide'}'></div>
        `
        steps.push(`.step${classCount}`)
        step.map((item) => pushStepQuestions(item, `.step${classCount}`))
        classCount ++
    })
}
const pushStepQuestions = (stepData, elem) => {
    const {title, type, id, dropdowncontents, dropdowntitle} = stepData;
    if (type === 'dropdown'){
        getElement(elem).innerHTML += `
        <section class="${dropdowntitle} dropdown relative">
            <div class="flexlittle">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99996 1.66667C14.6025 1.66667 18.3333 5.3975 18.3333 10C18.3333 14.6025 14.6025 18.3333 9.99996 18.3333C5.39746 18.3333 1.66663 14.6025 1.66663 10C1.66663 5.3975 5.39746 1.66667 9.99996 1.66667ZM9.99996 5C9.77895 5 9.56698 5.0878 9.4107 5.24408C9.25442 5.40036 9.16663 5.61232 9.16663 5.83333V10C9.16667 10.221 9.2545 10.4329 9.41079 10.5892L11.9108 13.0892C12.068 13.241 12.2785 13.325 12.497 13.3231C12.7155 13.3212 12.9245 13.2335 13.079 13.079C13.2335 12.9245 13.3211 12.7155 13.323 12.497C13.3249 12.2785 13.2409 12.068 13.0891 11.9108L10.8333 9.655V5.83333C10.8333 5.61232 10.7455 5.40036 10.5892 5.24408C10.4329 5.0878 10.221 5 9.99996 5Z" fill="white" fill-opacity="0.35"/>
            </svg>
            <p class="fs">${title}</p>
            </div>
            <div class="flexlittle pointer semibold days" onclick="toggleDropDown('.${dropdowntitle}')">
            <p class="upper">${dropdowntitle}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989593 11.3033 0.6967C11.0104 0.403806 10.5355 0.403806 10.2426 0.6967L6 4.93934L1.75736 0.696699C1.46447 0.403805 0.989593 0.403805 0.6967 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z" fill="white" fill-opacity="0.65"/>
            </svg>
            </div>
            <div class="${dropdowntitle}dropdown hidden">
            </div>
        </section>
        `
        dropdowncontents.map((value) => {
            document.querySelector(`.${dropdowntitle}dropdown`).innerHTML += `
            <div class="${value}" onclick="selectValue('${value}')">
            <h4>${value}</h4>
            <span class="checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" class="${value}check hidden" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.63636 12L3 8.19048L4.27273 6.85714L6.63636 9.33333L11.7273 4L13 5.33333L6.63636 12Z" fill="black"/>
            </svg>
            </span>
        </div>
            `
        })
    } else {
        getElement(elem).innerHTML += `
        <div class="${type}box flexlittle" id="${id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
            <path d="M12.7025 6.06027L9.912 3.29863L10.8312 2.37808C11.0829 2.12603 11.3922 2 11.759 2C12.1258 2 12.4349 2.12603 12.6861 2.37808L13.6054 3.29863C13.8571 3.55068 13.9884 3.8549 13.9993 4.21129C14.0103 4.56767 13.8899 4.87167 13.6382 5.12329L12.7025 6.06027ZM11.7505 7.03014L4.79054 14H2V11.2055L8.95993 4.23562L11.7505 7.03014Z" fill="white" fill-opacity="0.35"/>
        </svg>
        ${type === 'textarea' ? 
        `<textarea name="ems${id}" id="ems${id}" placeholder="${title}" onfocus="activeStateOn('${id}')" onfocusout="activeStateOut('${id}')"></textarea> ` :
        `<input type="text" name="ems${id}" id="ems${id}" placeholder="${title}" onfocus="activeStateOn('${id}')" onfocusout="activeStateOut('${id}')"> `
        }
    </div>
    `
    }
}
pushSteps(stepsWithQuestions)
getElement('.menu-ems').addEventListener('click', () => {
    getElement('#applicationSteps').classList.remove("hide")
    getElement('#applicationContents').classList.add("hide")
})
const activeStateOn = (id) => {
        getElement(`#${id}`).classList.add('inputactive')
}
const activeStateOut = (id) => {
    getElement(`#${id}`).classList.remove('inputactive')
}

// SWITCH TO NEXT AND PREVIOUS STEP
let stepCount = 0
const nextStep = () => {
    if(stepCount >= 0 && stepCount < totalsteps ){
        stepCount ++
        getElement('.dashstep').classList.toggle('green')
        getElement('.stepone').classList.add('done')
        getElement('.stepone').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M13.8182 22L8 16.2857L10.0364 14.2857L13.8182 18L21.9636 10L24 12L13.8182 22Z" fill="#57FFAF"/>
        </svg>`
        getElement('.steponestatus').textContent = 'Completed'
        document.querySelector('.steponestatus').parentElement.style.color = 'rgba(255, 255, 255, 0.35)'
        document.querySelector('.steptwostatus').parentElement.style.color = 'white'
        getElement('.steptwo').style.background = 'rgba(124, 62, 255, 0.8)';
        steps.map((step) => {
            if(steps[stepCount] === step){
                document.querySelector(step).classList.remove('hide')
            } else {
                document.querySelector(step).classList.add('hide')
            }
        })
        if(stepCount === totalsteps - 1){
            getElement('#submitBtn').classList.remove('hidden')
            getElement('#nextBtn').classList.add('hidden')
        }
    } 
}
const prevStep = () => {
    if(stepCount > 0){
        stepCount --
        getElement('.dashstep').classList.toggle('green')
        getElement('.stepone').classList.remove('done')
        getElement('.stepone').innerHTML = '1'
        getElement('.steponestatus').textContent = 'Unfilled'
        getElement('.steptwo').style.background = 'rgba(124, 62, 255, 0.2)';
        document.querySelector('.steptwostatus').parentElement.style.color = 'rgba(255, 255, 255, 0.35)'
        document.querySelector('.steponestatus').parentElement.style.color = 'white'
        steps.map((step) => {
            if(steps[stepCount] == step){
                document.querySelector(step).classList.remove('hide')
            } else {
                document.querySelector(step).classList.add('hide')
            }
            getElement('#submitBtn').classList.add('hidden')
            getElement('#nextBtn').classList.remove('hidden')
        })
       
    }
}
let emsData = {
    id: '',
    status: 'pending',
    expiresIn: '7 days',
    name: '',
    about: '',
    preferredWorkSchedule: [],
    preferredDepartment: [],
    trip: false,
    rework: false
}
const selectValue = (value) => {
    document.querySelector(`.${value}check`).classList.toggle('hidden');
}
const selectOption = (name, list, content) => {
    document.querySelector(`${name}check`).classList.toggle('hidden');
    if(list === 'policework'){
        if(policeRequest.preferredWorkSchedule.includes(content)){
            policeRequest.preferredWorkSchedule = policeRequest.preferredWorkSchedule.filter((i) => i !== content);
        } else {
            policeRequest.preferredWorkSchedule.push(content)
        }
    } else if (list === 'policedepartment'){
        if(policeRequest.preferredDepartment.includes(content)){
            policeRequest.preferredDepartment = policeRequest.preferredDepartment.filter((i) => i !== content);
        } else {
            policeRequest.preferredDepartment.push(content)
        }
    } else if(name === '.policetrip'){
        policeRequest.trip = !policeRequest.trip
    } else if(name === '.policerework'){
        policeRequest.rework = !policeRequest.rework
    } else if(name === '.emstrip'){
        emsData.trip = !emsData.trip
    } else if(name === '.emsrework'){
        emsData.rework = !emsData.rework
    }
}
const refreshEmsForm = () => {
    emsData = {
        id: '',
        status: 'pending',
        expiresIn: '7 days',
        name: '',
        about: '',
        preferredWorkSchedule: [],
        preferredDepartment: [],
        trip: false,
        rework: false
    }
}
// SUBMIT APPLICATION
const submitApplication = () => {
    // steps[0].classList.remove('hide');
    // steps[1].classList.add('hide');
    getElement('.stepone').innerHTML = '1'
    getElement('.steponestatus').textContent = 'Unfilled'
    getElement('.dashstep').classList.toggle('green')
    getElement('.stepone').classList.remove('done')
    getElement('#submitBtn').classList.add('hidden')
    getElement('#nextBtn').classList.remove('hidden')
    getElement('.steptwo').style.background = 'rgba(124, 62, 255, 0.2)';
    document.querySelector('.steptwostatus').parentElement.style.color = 'rgba(255, 255, 255, 0.35)'
    document.querySelector('.steponestatus').parentElement.style.color = 'white'
    stepCount = 0
    getElement('#applicationSteps').classList.add("hide")
    getElement('#applicationContents').classList.remove("hide")
    emsData.id = Math.round(Math.random() * 1000);
    getElement('.applicationReceived').classList.remove('hide')
    setTimeout(() => {
        getElement('.applicationReceived').classList.add('hide')
    }, 4000);
    refreshEmsForm()
}
// let applicationsData = [
//     {
//         name: "James Bond",
//         id: 150,
//         expiresIn: "6 days",
//         status: "pending",
//         role: "driver",
//         department: "delivery",
//         imageUrl: "images/character.png"
//     }
// ]
// const uploadApplications = (data) => {
//     getElement('.applications').innerHTML = ''
//     data.map((app) => {
//         const {name, id, expiresIn, status, role, department, imageUrl} = app;
//         getElement('.applications').innerHTML += `
//         <div class="application">
//         <div class="image-box"><img src="${imageUrl}" alt=""></div>
//         <article>
//           <h3 class="semibold fm">${name}</h3>
//           <div class="details flexsmall">
//             <p>${role}</p><span class="dot"></span>
//             <p>${department}</p><span class="dot"></span>
//             <p>ID: ${id}</p>
//           </div>
//           <div class="status flexsmall">
//             <button class="semibold fs ${status}">Application ${status}</button>
//             ${ status === 'pending' ?
//             `<div class="edit">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M19.0538 9.09041L14.868 4.94795L16.2469 3.56712C16.6244 3.18904 17.0883 3 17.6385 3C18.1887 3 18.6523 3.18904 19.0292 3.56712L20.408 4.94795C20.7856 5.32603 20.9826 5.78236 20.999 6.31693C21.0154 6.85151 20.8348 7.30751 20.4573 7.68493L19.0538 9.09041ZM17.6257 10.5452L7.18581 21H3V16.8082L13.4399 6.35342L17.6257 10.5452Z" fill="#CDB5FF" fill-opacity="0.5"/>
//               </svg>
//             </div>` : '' }
//           </div>
//         </article>
//         <div class="cancel" onclick="deleteApplication(${id})">
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//             <path d="M14.0932 15L10.0032 10.9062L5.91318 15L5 14.0874L9.09646 10L5 5.9126L5.91318 5L10.0032 9.09383L14.0932 5.00643L15 5.9126L10.91 10L15 14.0874L14.0932 15Z" fill="#FF6565" fill-opacity="0.6"/>
//             </svg>
//         </div>
//         <div class="due">in ${expiresIn}</div>
//       </div>
//         `
//     })
// }
// uploadApplications(applicationsData);
// const deleteApplication = (id) => {
//     applicationsData = applicationsData.filter((application) => application.id !== id);
//     uploadApplications(applicationsData);
// }
// ESCAPE KEY BACK
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        alert('BACK')
    }
});
// SPACEBAR UNLOCK TO GET
document.addEventListener('keydown', evt => {
    if(evt.key === 'Enter'){
        alert("UNLOCK TO GET");
    }
})

// DISPLAY FULL UI
const toggleDisplay = () =>{
    getElement('.glowcontainer').classList.toggle('hideslide')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});
