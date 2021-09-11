export default function (toast, status, description) {
  return toast.show({
    placement: 'top-right',
    title: 'Shoes Store',
    status: status,
    description: description,
    position: 'relative',
    right: -32,
    top: -50,
    width: 360,
  });
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
