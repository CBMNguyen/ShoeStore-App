export default function (toast, status, description) {
  return toast.show({
    placement: 'top-right',
    title: 'Shoes Store',
    status: status,
    description: description,
    position: 'relative',
    right: -10,
    top: -20,
    width: 360,
  });
}
