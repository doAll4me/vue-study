import { onMounted, reactive } from "vue";
import axios from "axios";

export default function () {
  let dogList = reactive([
    "https://images.dog.ceo//breeds//pembroke//n02113023_3913.jpg",
  ]);

  async function getDog() {
    try {
      let result = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      );
      // console.log(result.data.message);
      dogList.push(result.data.message);
    } catch (error) {
      alert(error);
    }
  }

  //   钩子里还可以写钩子函数
  onMounted(() => {
    getDog();
  });

  //   向外部提供东西
  return { dogList, getDog };
}
