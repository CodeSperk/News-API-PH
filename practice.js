const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  const newsCategory = data.data.news_category.slice(0, 3);
  // console.log(newsCategory);

  const tabContainer = document.getElementById("tab-container");
  newsCategory.forEach((category) => {
    const div = document.createElement("div");
    div.classList.add("tabs");
    div.innerHTML = `
  <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name} </a> 
  `;
    tabContainer.appendChild(div);
    // console.log(category)
  });
};

const handleLoadNews = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await response.json();
  console.log(data.data)

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; //reload everytime you refreshed
  data.data?.forEach((news) => {
    // console.log(news);
    const div = document.createElement("div");
    div.innerHTML = ` 
    <div class="card bg-base-100 shadow-xl">
    <figure class=""><img  class="w-auto xl:h-[401px]" src="${news?.image_url}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${news.title.slice(0, 40)}
      <div class="badge badge-primary p-5">${news?.rating.badge}</div>
      </h2>
      <p>${news.details.slice(0, 60)} </p>
      <h5>Total views: ${news.total_view ? news.total_view : " No view"} </h5>
      <div class="card-footer flex justify-between items-center mt-8">
            <div class="avatar-online flex items-center">
              <img class="w-14 rounded-full" src="${news.author?.img}"/>
              <div>
                <h4>${news.author?.name}</h4>
                <small>${news.author?.published_date}</small>
              </div>
            </div>
            <button class="btn bg-gray-800 text-white hover:text-black py-2">DETAILS</button>  
      </div>
    </div>
  </div>
    `;
    cardContainer.appendChild(div);
  });
};

handleCategory();
handleLoadNews("01");


const handleModal = (modalData) => {
  const modalContainer = document.getElementById('modal-container');
  
}
handleModal(23)


