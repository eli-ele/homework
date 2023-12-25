const initData = async () => {
    const { data } = await fetch('./data.json').then(response => response.json());
    console.log(data);

    const sortTitles = (data) => {
        return data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    };

    const reverseTitles = (data) => {
        return data.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
    };

    const table = document.querySelector('table');

    const renderTable = (data) => {
        table.innerHTML = `<tr>
            <th><input id=hedinput type="checkbox"></th>
            <th id="title">
                Title 
                <div class="button">
                <button id="butt1"><img class=img1 src="./assets/img/ant-design_caret-down-filled.svg" alt=""></button>
                <button id="butt2"><img class=img2 src="./assets/img/ant-design_caret-down-filled2.svg" alt=""></button>
                 </div>
            </th>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action<a</th>
        </tr>`;
        
        for (const course of data) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input id=hedinput type="checkbox"></td>
                <td>${course.name}</td>
                <td>${course.date}</td>
                <td>${course.title}</td>
                <td>${course.amount}</td>
                <button id=butt type="button" >Danger</button>
                <td><a id=a> ... </a></td>`;
            table.appendChild(tr);
        }
        document.getElementById('butt1').addEventListener("click", sortData);
        document.getElementById('butt2').addEventListener("click", reverseData);
    }

    const sortData = () => {
        renderTable(sortTitles([...data]));
    }
    const reverseData = () => {
        renderTable(reverseTitles([...data]));
    }
    renderTable(data);

    document.getElementById('butt1').addEventListener("click", sortData);
    document.getElementById('butt2').addEventListener("click", reverseData);
};

initData();