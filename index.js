

const data = [
    {
        name: "JONATHAN",
        surname: "CAREY",
        title: "BRAND MANAGER @ PEPSI",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "SOMEONE",
        surname: "ELSE",
        title: "ANOTHER POSITION @ COMPANY",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "AMANDA",
        surname: "SMITH",
        title: "CEO @ STARTUP",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "ROBERT",
        surname: "JOHNSON",
        title: "CTO @ TECH FIRM",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "EMILY",
        surname: "DAVIS",
        title: "HEAD OF MARKETING @ CORPORATE",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "MICHAEL",
        surname: "BROWN",
        title: "LEAD DEVELOPER @ AGENCY",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "JESSICA",
        surname: "WILSON",
        title: "PRODUCT MANAGER @ RETAIL",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "DAVID",
        surname: "MILLER",
        title: "DESIGNER @ CREATIVE STUDIO",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    }
];


const gridContainer = document.querySelector('.grid');

data.forEach(item => {
    console.log("sdfsd", item)
    const div = document.createElement('div');
    div.className = 'grid-item';

    div.innerHTML =  `<div style="height: 100px; width: 100px; color: rgb(228, 163, 12);"><img  height="100%" width="100%" src=${item.imgSrc} ></div>
    <h4>${item.name}</h4>
    <h4>${item.surname}</h4>
    <P style="font-size: 10px;">${item.title}</P>`;

    gridContainer.appendChild(div);
});
