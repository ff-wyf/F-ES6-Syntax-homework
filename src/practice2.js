const inject = (items, sections) => {
  let ans = [];
  items.forEach((item, index) => {
    const findItem = sections.find((el) => el.index === index);
    if (findItem) {
      ans.push(findItem.content, item);
    } else {
      ans.push(item);
    }
  });
  return ans;
}
export {inject};
