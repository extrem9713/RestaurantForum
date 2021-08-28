<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 5,
        "name": "Salma Johnson",
        "tel": "866.855.4905",
        "address": "4722 Lionel Trafficway",
        "opening_hours": "08:00",
        "description": "Mollitia sit recusandae reiciendis voluptatibus commodi voluptas et. Culpa dolor qui quo esse saepe. Tempore et dolores sit voluptatem harum autem consequatur unde.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.09006422711376",
        "commentsLength": 3,
        "viewCounts": 19,
        "createdAt": "2021-07-05T09:58:39.000Z",
        "updatedAt": "2021-08-27T11:41:15.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-08-09T07:00:13.000Z"
        },
        "Comments": [
            {
                "id": 5,
                "text": "Voluptatem ad ut a exercitationem aut nemo.",
                "UserId": 2,
                "RestaurantId": 5,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-08-21T14:30:09.000Z"
                }
            },
            {
                "id": 55,
                "text": "Tempore labore possimus reprehenderit qui provident est.",
                "UserId": 2,
                "RestaurantId": 5,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-08-21T14:30:09.000Z"
                }
            },
            {
                "id": 105,
                "text": "Pariatur et natus culpa atque.",
                "UserId": 2,
                "RestaurantId": 5,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-08-21T14:30:09.000Z"
                }
            }
        ]
    }
}
export default {
     data () {
    return{
      restaurant: []
    }
  },
  created(){
    this.fetchuser()
  },
  methods:{
    fetchuser(){
    const  restaurant= dummyData.restaurant
    this.restaurant = restaurant
    },
  }
}
</script>