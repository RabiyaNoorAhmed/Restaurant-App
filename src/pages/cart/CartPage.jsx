import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import SectionBanner from '../../components/banner/SectionBanner';

const CartPage = () => {
  const { cartItems, incrementQuantity, decrementQuantity, deleteItem, getTotalAmount } = useContext(CartContext);

  return (
      <div>
          <div>
              <SectionBanner
                  title="Items Added To The"
                  subtitle="Cart"
                  btnClass="hide"
              />
          </div>
          {/* Table Cart */}
          <div>
              <div className="overflow-x-auto">
                  <table className="table">
                      {/* head */}
                      <thead className='bg-Green text-white rounded-sm'>
                          <tr>
                              <th>#</th>
                              <th>Food</th>
                              <th>Item Name</th>
                              <th>Quantity</th>
                              <th>Total Price</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {cartItems.map((item, index) => (
                              <tr key={item._id}>
                                  <td>{index + 1}</td>
                                  <td>
                                      <div className="flex items-center gap-3">
                                          <div className="avatar">
                                              <div className="mask mask-squircle w-12 h-12">
                                                  <img src={item.image} alt={item.name} />
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>{item.name}</td>
                                  <td>
                                      <div className="flex items-center">
                                          <button className="btn btn-xs" onClick={() => decrementQuantity(item._id)}>-</button>
                                          <span className="mx-2">{item.quantity}</span>
                                          <button className="btn btn-xs" onClick={() => incrementQuantity(item._id)}>+</button>
                                      </div>
                                  </td>
                                  <td>${item.totalPrice.toFixed(2)}</td>
                                  <td>
                                      <button className="btn btn-ghost btn-xs" onClick={() => deleteItem(item._id)}>Delete</button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              <div className="mt-4">
                  <h3 className="text-lg font-semibold text-end mr-10">Total Amount: ${getTotalAmount()}</h3>
              </div>
          </div>
      </div>
  );
};

export default CartPage;
