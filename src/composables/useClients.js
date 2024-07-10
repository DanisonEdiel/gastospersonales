import { db } from "@/db/db";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

const isLoading = ref(false);
const hasError = ref(false);
const data = ref([]);
const fetchUsers = async () => {
  data.value = [];
  isLoading.value = true;
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      data.value.push(doc.data());
    });
  } catch (error) {
    hasError.value = true;
  }
  isLoading.value = false;
};

const useClients = () => {
  fetchUsers();
  return {
    data,
    isLoading,
    hasError,
  };
};

export default useClients;
