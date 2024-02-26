import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const getUser = async (email: string = "", password: string = "") => {
  let uid = "";

  if (!("auth" in localStorage)) {
    uid = await this.login(email, password);
  } else {
    const auth = getLocalStorage({ key: "auth" });
    uid = auth.uid;
  }

  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const data = userSnap.data() as User;

    const user: User = {
      email: data.email,
      isSeller: data.isSeller,
      nickname: data.nickname,
      profile: data.profile,
      uid: data.uid,
    };

    setLocalStorage({ key: "auth", value: user });

    await storeService.getCart(data.uid);

    return user;
  }
};
