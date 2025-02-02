import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import RTK from "./pages/RTK";
import Zustand from "./pages/Zustand";
import Query from "./components/Query";
import Mutation from "./components/useMutation";
import PaginationQuery from "./components/Pagination";
import Counter from "./components/Counter";
import TodoList from "./components/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <RTK />
            </MainLayout>
          }
        />
        <Route
          path="/zustand"
          element={
            <MainLayout>
              <Zustand />
            </MainLayout>
          }
        />
        <Route
          path="/query"
          element={
            <MainLayout>
              <Query />
            </MainLayout>
          }
        />
        <Route
          path="/mutation"
          element={
            <MainLayout>
              <Mutation />
            </MainLayout>
          }
        />
        <Route
          path="/pagination"
          element={
            <MainLayout>
              <PaginationQuery />
            </MainLayout>
          }
        />
        <Route
          path="/zustand/counter"
          element={
            <MainLayout>
              <Counter />
            </MainLayout>
          }
        />
        <Route
          path="/zustand/todo"
          element={
            <MainLayout>
              <TodoList />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
