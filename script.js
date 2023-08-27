fetch("scraped_data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((item) => {
            const productDiv = document.createElement("container");
            productDiv.className = "product";

            const img = document.createElement("img");
            img.src = item.img_source;
            productDiv.appendChild(img);

            const title = document.createElement("h3");
            title.textContent = item.title;
            productDiv.appendChild(title);

            const price = document.createElement("p");
            price.textContent = item.fee;
            productDiv.appendChild(price);

            const rating = document.createElement("p");
            rating.textContent = item.rating;
            productDiv.appendChild(rating);

            const link = document.createElement("a");
            link.href = item.url;
            link.textContent = "View on Amazon";
            link.target = "_blank";
            productDiv.appendChild(link);
            container.appendChild(productDiv);
        });
    });
