const parseData = (data) => {
  const ans = data.data.map(([name, age, gender, birthday]) =>
    ({name, age, gender, birthday})
  );
  return ans;
}
export {parseData};
