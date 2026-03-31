import React, {
  startTransition,
  useActionState,
  useDeferredValue,
  useMemo,
  useOptimistic,
  useState,
  useTransition,
} from "react";
// import ParticleSketch from "./p5/ParticleSketch";

const React1819 = () => {
  //   const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const defferredValue = useDeferredValue(inputValue);
  const [state, action, isPending] = useActionState(handleLogin);
  const [list, setList] = useState([]);
  const [like, setLike] = useState(0);
  const [optimisticLike, setOptimisticLike] = useOptimistic(
    like,
    (state, action) => {
      console.log(state, action);
      if (action) {
        return state + 1;
      }
    }
  );

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // let tempList = [];
    // for (let i = 1; i <= 20000; i++) {
    //   tempList.push(inputValue);
    // }
    // setList(tempList);
    // startTransition(() => {
    //   let tempList = [];
    //   for (let i = 1; i <= 20000; i++) {
    //     tempList.push(e.target.value);
    //   }
    //   setList(tempList);
    // });
  };

  const cahedList = useMemo(() => {
    let tempList = [];
    for (let i = 1; i <= 20000; i++) {
      tempList.push(inputValue);
    }
    return tempList;
  }, [defferredValue]);

  const fakeLoginApi = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "1234") {
          resolve({ status: "success", message: "Login Successfully" });
        } else {
          reject({ status: "error", message: "Invalid Credentials" });
        }
      }, 3000);
    });
  };

  const fakeLikeApi = () => {
    const flag = true; // Simulate success or failure
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (flag) {
          resolve({ status: "success" });
        } else {
          reject({ status: "error" });
        }
      }, 3000);
    });
  };

  async function handleLogin(prevState, formData) {
    console.log("form data", formData);
    // setOptimisticLike(1);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const response = await fakeLoginApi(username, password);
      console.log(response);
      // await fakeLikeApi();
      // setLike((prevState) => prevState + 1);
      return response;
    } catch (error) {
      console.log(error);
      // setLike((prevState) => prevState);
      return error;
    }
  }

  const handleLikeCount = async () => {
    // startTransition(() => {
    setOptimisticLike(true);
    // });

    // Simulate server update with a delay
    try {
      const response = await fakeLikeApi();
      setLike((prevState) => prevState + 1);
    } catch (error) {
      setLike((prevState) => prevState);
    }
  };

  return (
    <div>
      {/* <form action={action}>
        <input type="text" name="username" onChange={handleChange} />
        <input type="text" name="password" />
        <button type="submit">Submit</button>
      </form>
      {isPending ? <p>Logging in...</p> : null}
      {state ? <p>{state.message}</p> : null}
      <button onClick={handleLikeCount}>Like{optimisticLike}</button> */}
      {/* <ParticleSketch /> */}
    </div>
  );
};

export default React1819;
