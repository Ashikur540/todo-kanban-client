import axiosInstance from "../lib/axios";

export const getAllTodos = async () => {
  try {
    const res = await axiosInstance.get("/todos");
    return res.data;
  } catch (error) {
    console.log("✨ ~ file: todo.ts:8 ~ getAllTodos ~ error:", error);
  }
};
