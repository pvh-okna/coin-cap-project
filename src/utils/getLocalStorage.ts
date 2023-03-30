export const ClickBtn = (
  name: string,
  price: string,
  id: string,
  quantity: string
) => {
  const storageArr = JSON.parse(localStorage.getItem("bag")!) || [];
  storageArr.push({ id: id, name: name, price: price, quantity: quantity });
  localStorage.setItem("bag", JSON.stringify(storageArr));
};
export const ClickCoin = (id: string) => {
  const itemsArr = JSON.parse(localStorage.getItem("bag")!);
  itemsArr.splice(
    0,
    itemsArr.length,
    ...itemsArr.filter((n: any) => n.id !== id)
  );
  localStorage.setItem("bag", JSON.stringify(itemsArr));
};
