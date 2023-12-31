//save to storage
export const saveToLocalStorage = ({ key, value }) => {
  const newLogin = {
    id: crypto.randomUUID(),
    email: key,
    password: value,
  };

  return localStorage.setItem("login", JSON.stringify(newLogin));
};

//get item from storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//delete item

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

export const saveSearchResults = ({ keyword, address, category }) => {
  const results = {
    id: crypto.randomUUID(),
    keyword: keyword,
    address: address,
    category: category,
  };

  return localStorage.setItem("results", JSON.stringify(results));
};
