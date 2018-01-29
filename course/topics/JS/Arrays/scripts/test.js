function removeDuplicates(arr) {
  return arr.reduce(function(result, current) {
    if (result.indexOf(current) === -1)
      return result.push(current);
    else return result;
  }, []);
}

removeDuplicates[(2, 3, 5, 6, 2, "a", "A", "b", "C")];
