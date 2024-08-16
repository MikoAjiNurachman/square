import React from 'react';
import * as tableStyles from './Table.module.css';


const Table = ({header, data, withDetail, withUpdate, withDelete, handleDetail, handleUpdate, handleDelete}) => {
  return (
    <table className={tableStyles.customTable}>
      <thead>
        <tr>
          {
            header.map((item) => (
                <th key={item.key}>{item.header}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
          {header.map((column, colIndex) => (
            <td key={colIndex}>
              {column.render
                ? column.render(item[column.key], item)
                : item[column.key]}
            </td>
          ))}
          <td>
              {withDetail && <button onClick={() => handleDetail(item.id)} className={tableStyles.detailBtn}>Detail</button>}
              {withUpdate && <button onClick={() => handleUpdate(item.id)} className={tableStyles.editBtn}>✎</button>}
              {withDelete && <button onClick={() => handleDelete(item.id)} className={tableStyles.deleteBtn}>🗑️</button>}
            </td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
