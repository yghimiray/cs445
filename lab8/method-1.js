const { Observable } = rxjs;

window.onload = function () {
    document.getElementById("listBtn").onclick = function () {
        let totalEmp = document.getElementById("len").value;
        let observer = Observable.create(
            fetch("https://randomuser.me/api/?results=" + totalEmp)
        );
        let jsonObj = observer.json();
        let resultsArr = observer.next(jsonObj.results);

        observer.subscribe(resultsArr => {
            const empDiv = document.getElementById("divId");
            empDiv.innerHTML = "";
            resultsArr.forEach(element => {
                let template = `
                    <div > 
                    ${resultsArr.name.first} ${resultsArr.name.last}
                    </div>
                  `;
                const div = document.createElement('div');
                div.classList = 'row border-top';
                div.innerHTML = template;
                empDiv.appendChild(div);
            });

        })

    }
}