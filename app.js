const getElement = (elem) => {
    return document.querySelector(elem);
}
const applicableJobs = {
    ems: {
        applicationSubmitted: true,
        applicationStatus: "approved",
        questions: [
            {
                title: "Your Name1",
                type: 'input',
                id:"name"
            },
            {
                title: "Briefly About You",
                type: 'textarea',
                id:"about"
            },
            {
                title: "Country",
                type: 'input',
                id:"country"
            },
            {
                title: "IQ status",
                type: 'dropdown',
                id:"IQ",
                dropdowncontents: ['high', 'medium', 'low'],
                dropdowntitle: "IQ status"
            },
            {
                title: "ready for sentence",
                type: "checkbox",
                id: "sentencecheck"
            },
        ],
        inputs: [] 
    },
    police:{
        questions: [
            {
                title: "Your Name1",
                type: 'input',
                id:"policename"
            },
            {
                title: "Briefly About You",
                type: 'textarea',
                id:"policeabout"
            },
            {
                title: "Country",
                type: 'input',
                id:"policecountry"
            },
            {
                title: "Marital status",
                type: 'dropdown',
                id:"marital",
                dropdowncontents: ['married', 'single', 'divorced'],
                dropdowntitle: "marital status"
            },
            {
                title: "ready for deployment",
                type: "checkbox",
                id: "deploymentcheck"
            },
            {
                title: "chill first",
                type: 'textarea',
                id:"applcheckii"
            },
            {
                title: "State",
                type: 'input',
                id:"statekinda"
            },
            {
                title: "ready for work",
                type: "checkbox",
                id: "readycheck"
            },
            {
                title: "ready for vacation",
                type: "checkbox",
                id: "vacationcheck"
            }
        ],
        inputs: []
    },
    mechanic: [

    ]
}
// SWITCHING OF MAIN CONTENT/MENU AND MENU ACTIVE STATE
const sideMenu = [
    {
        name: "hot-jobs",
        menu: getElement('.menu-hot-jobs'),
        content: getElement('.hot-jobs-content')
    },
    {
        name: "police",
        menu: getElement('.menu-police'),
        content: getElement('.police-content')
    },
    {
        name: "ems",
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
let emsinputs = []
let policeinputs = []
const pushStepQuestions = (stepData, elem, page) => {
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
            <div class="flexlittle pointer semibold days" onclick="toggleDropDown('.${id}')">
            <p class="upper">${dropdowntitle}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989593 11.3033 0.6967C11.0104 0.403806 10.5355 0.403806 10.2426 0.6967L6 4.93934L1.75736 0.696699C1.46447 0.403805 0.989593 0.403805 0.6967 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z" fill="white" fill-opacity="0.65"/>
            </svg>
            </div>
            <div class="${id}dropdown hidden">
            </div>
        </section>
        `
        dropdowncontents.map((value) => {
            document.querySelector(`.${id}dropdown`).innerHTML += `
            <div class="${value}" onclick="selectValue('${value}', '${title}', '${page}')">
            <h4>${value}</h4>
            <span class="checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" class="${value}check hidden" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.63636 12L3 8.19048L4.27273 6.85714L6.63636 9.33333L11.7273 4L13 5.33333L6.63636 12Z" fill="black"/>
            </svg>
            </span>
        </div>
            `
        })
        page === 'ems' ? emsinputs.push({question: title, userpicks: []}) : policeinputs.push({question: title, userpicks: []})
    } else if(type === 'checkbox'){
        getElement(elem).innerHTML += `
        <div class="flexlittle fxs pointer checkboxes" id="${id}" onclick="selectOption('${title}','${id}', '${page}')">
            <span class="checkbox policetrip">
            <svg xmlns="http://www.w3.org/2000/svg" class="${id}check hidden" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.63636 12L3 8.19048L4.27273 6.85714L6.63636 9.33333L11.7273 4L13 5.33333L6.63636 12Z" fill="black"/>
            </svg>
            </span>
            <p>${title}</p>
        </div>
        `
        applicableJobs[page].inputs.push({question: title, userpick: false})
    } 
    else {
        getElement(elem).innerHTML += `
        <div class="${type}box flexlittle" id="${id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
            <path d="M12.7025 6.06027L9.912 3.29863L10.8312 2.37808C11.0829 2.12603 11.3922 2 11.759 2C12.1258 2 12.4349 2.12603 12.6861 2.37808L13.6054 3.29863C13.8571 3.55068 13.9884 3.8549 13.9993 4.21129C14.0103 4.56767 13.8899 4.87167 13.6382 5.12329L12.7025 6.06027ZM11.7505 7.03014L4.79054 14H2V11.2055L8.95993 4.23562L11.7505 7.03014Z" fill="white" fill-opacity="0.35"/>
        </svg>
        ${type === 'textarea' ? 
        `<textarea name="ems${id}" id="ems${id}" placeholder="${title}" onfocus="activeStateOn('${id}')" rows="7" onfocusout="activeStateOut('${id}')" oninput="saveInput('${title}', 'ems${id}', '${page}')"></textarea> ` :
        `<input type="text" name="ems${id}" id="ems${id}" placeholder="${title}" onfocus="activeStateOn('${id}')" onfocusout="activeStateOut('${id}')" oninput="saveInput('${title}', 'ems${id}', '${page}')"> `
        }
    </div>
    `
    applicableJobs[page].inputs.push({question: title, userinput: ""})
    }
}
// TESTING PUSH APPLICABLE JOBS
const pushApplicableJobs = (data) => {
    Object.keys(data).forEach(function(key){
        sideMenu.map((item) => {
            const {name, content} = item
            if(name === key){
                if(data[key].applicationSubmitted){
                    const {applicationStatus} = data[key]
                    content.innerHTML = `
                    <section class="requestcontent" id="${name}request">
                        <div class="relative">
                        <h2 class="upper">${name}</h2>
                        <div class="applicationstatus">
                            <div class="status flexsmall">
                            <button class="semibold fs ${applicationStatus} ${name}status">application ${applicationStatus}</button>
                            <div class="edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19.0538 9.09041L14.868 4.94795L16.2469 3.56712C16.6244 3.18904 17.0883 3 17.6385 3C18.1887 3 18.6523 3.18904 19.0292 3.56712L20.408 4.94795C20.7856 5.32603 20.9826 5.78236 20.999 6.31693C21.0154 6.85151 20.8348 7.30751 20.4573 7.68493L19.0538 9.09041ZM17.6257 10.5452L7.18581 21H3V16.8082L13.4399 6.35342L17.6257 10.5452Z" fill="#CDB5FF" fill-opacity="0.5"/>
                                </svg>
                            </div>
                        </div>
                        </div>
                    </section>
                    `
                } else {
                    let steps = []
                    let allstep = Math.ceil(data[key].questions.length / 5)
                    let stepover = 6
                    for (let index = 1; index < allstep+1; index++) {
                        steps.push(`${name}step${index}`)                    
                    }
                    content.innerHTML= `
                        <section class="questions" id="${name}RequestSteps">
                            <div>
                                <h2 class="upper">${name}</h2>
                                <section class="flexsmall ${name}steps"></section>
                            </div>
                            <section id="${name}-steps-container"></section>
                            <div class="ems-btns">
                            <button class="previous bold fs pointer" id="${name}prevBtn">PREVIOUS STEP</button>
                            <button class="next bold fs pointer" id="${name}nextBtn">NEXT STEP</button>
                            <button class="next bold fs pointer hidden" id="${name}submitBtn">SEND REQUEST</button>
                            </div>
                        </section>
                        <section class="hide requestcontent" id="${name}request">
                            <div class="relative">
                            <h2 class="upper">${name}</h2>
                            <div class="applicationstatus">
                                <div class="status flexsmall">
                                <button class="semibold fs pending ${name}status">Application pending</button>
                                <div class="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.0538 9.09041L14.868 4.94795L16.2469 3.56712C16.6244 3.18904 17.0883 3 17.6385 3C18.1887 3 18.6523 3.18904 19.0292 3.56712L20.408 4.94795C20.7856 5.32603 20.9826 5.78236 20.999 6.31693C21.0154 6.85151 20.8348 7.30751 20.4573 7.68493L19.0538 9.09041ZM17.6257 10.5452L7.18581 21H3V16.8082L13.4399 6.35342L17.6257 10.5452Z" fill="#CDB5FF" fill-opacity="0.5"/>
                                    </svg>
                                </div>
                            </div>
                            </div>
                        </section>
                    `
                    document.querySelector(`#${name}prevBtn`).addEventListener("click", () => {
                        prevStep(name, allstep, steps)
                    })
                    document.querySelector(`#${name}nextBtn`).addEventListener("click", () => {
                        nextStep(name, allstep, steps)
                    })
                    document.querySelector(`#${name}submitBtn`).addEventListener("click", () => {
                        sendRequest(name, data)
                    })
                    for (let index = 1; index < allstep+1; index++) {
                        document.querySelector(`#${name}-steps-container`).innerHTML += `
                        <div class='${name}step${index} ems-steps ${index === 1 ? '' : 'hide'}'></div>
                        `
                        data[key].questions.slice(stepover - 6,stepover).map((item) => pushStepQuestions(item, `.${name}step${index}`, `${name}`))
                        stepover += 5
                    }
                    for (let index = 0; index < allstep; index++) {
                        document.querySelector(`.${name}steps`).innerHTML += `
                        <p class="fm step bold ${name}stepindicator${index+1}">${index + 1}</p>
                        <span class="dashstep ${name}dash${index+1}"></span>
                        `
                    }
                    if(allstep === 1 ){
                        document.querySelector(`.${name}steps`).innerHTML = ''
                        getElement(`#${name}submitBtn`).classList.remove('hidden')
                        getElement(`#${name}nextBtn`).classList.add('hidden')
                        getElement(`#${name}prevBtn`).classList.add('hidden')
                    }
                }
                
            }
        })
    })
}
pushApplicableJobs(applicableJobs)
// POLICE
const toggleDropDown = (name) => {
    getElement(name).classList.toggle('activedropdown');
    getElement(name + 'dropdown').classList.toggle('hidden');
    getElement(name + 'dropdown').classList.toggle('daysdropdown');
}

const saveInput = (title, id, page) => {
    let value = getElement(`#${id}`).value
    applicableJobs[page].inputs = applicableJobs[page].inputs.map((i) => {
        if(i.question === title){
            return {...i, userinput: value}
        } else {
            return {...i}
        }
    })
}
const activeStateOn = (id) => {
        getElement(`#${id}`).classList.add('inputactive')
}
const activeStateOut = (id) => {
    getElement(`#${id}`).classList.remove('inputactive')
}

let stepCount = 0
const nextStep = (name, totalsteps, steps) => {
    if(stepCount >= 0 && stepCount < totalsteps ){
        stepCount ++
        getElement(`.${name}dash${stepCount}`).classList.toggle('green')
        getElement(`.${name}stepindicator${stepCount}`).classList.add('done')
        getElement(`.${name}stepindicator${stepCount}`).innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M13.8182 22L8 16.2857L10.0364 14.2857L13.8182 18L21.9636 10L24 12L13.8182 22Z" fill="#57FFAF"/>
        </svg>`
        getElement(`.${name}stepindicator${stepCount + 1}`).style.background = 'rgba(124, 62, 255, 0.8)';
        
        steps.map((step) => {
            if(steps[stepCount] === step){
                document.querySelector(`.${step}`).classList.remove('hide')
            } else {
                document.querySelector(`.${step}`).classList.add('hide')
            }
        })
        if(stepCount === totalsteps - 1){
            getElement(`#${name}submitBtn`).classList.remove('hidden')
            getElement(`#${name}nextBtn`).classList.add('hidden')
        }
    } 
}
const prevStep = (name, totalsteps, steps) => {
    if(stepCount > 0){
        stepCount --
        getElement(`.${name}dash${stepCount+1}`).classList.toggle('green')
        getElement(`.${name}stepindicator${stepCount + 1}`).classList.remove('done')
        getElement(`.${name}stepindicator${stepCount + 1}`).innerHTML = stepCount + 1
        getElement(`.${name}stepindicator${stepCount + 2}`).style.background = 'rgba(124, 62, 255, 0.2)';
        steps.map((step) => {
            if(steps[stepCount] == step){
                document.querySelector(`.${step}`).classList.remove('hide')
            } else {
                document.querySelector(`.${step}`).classList.add('hide')
            }
            getElement(`#${name}submitBtn`).classList.add('hidden')
            getElement(`#${name}nextBtn`).classList.remove('hidden')
        })
    }
}
const selectValue = (value, title, page) => {
    document.querySelector(`.${value}check`).classList.toggle('hidden');
    applicableJobs[page].inputs = applicableJobs[page].inputs.map((i) => {
        if(i.question === title){
            i.userpicks.push(value)
            return {...i}
        } else {
            return {...i}
         }
    })
}
const selectOption = (title, elem, page) => {
    document.querySelector(`.${elem}check`).classList.toggle('hidden');
    applicableJobs[page].inputs = applicableJobs[page].inputs.map((i) => {
        if(i.question === title){
            i.userpick = !i.userpick
            return {...i}
        } else {
            return {...i}
        }
    })
}
// SUBMIT APPLICATION
const sendRequest = (name, data) => {
    data[name].applicationSubmitted = true;
    data[name].applicationStatus = "pending";
    pushApplicableJobs(data)
    stepCount = 0
    getElement('.applicationReceived').classList.remove('hide')
    setTimeout(() => {
        getElement('.applicationReceived').classList.add('hide')
    }, 4000);
}

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
