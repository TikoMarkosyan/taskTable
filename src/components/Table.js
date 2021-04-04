import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { Delete } from "@material-ui/icons";
import { connect } from 'react-redux';
import { DeleteTableItems } from '../redux/actions';

function Table({ list, headers, DeleteTableItems }) {
  
    return (
        <MaterialTable
            title="Table App"
            columns={headers.map((el, l) => {
                el.field = el.dataIndex
                return el;
            })}
            data={list}
            options={{
                pageSize: 20,
                headerStyle: {
                    position: "sticky",
                    top: "0"
                },
                maxBodyHeight: "300px",
                selection: true,
            }}
            actions={[
                {
                    icon: () => <Delete />,
                    tooltip: "Delete Rows",
                    onClick: (target, remuvelist) => { DeleteTableItems(list, remuvelist) }
                }
            ]}
        />
    );
}

const mapStateToProps = (state, ownProps) => {
    const list = state.Tables.data;
    const headers = state.Tables.headers;
    return {
        list,
        headers
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        DeleteTableItems: (list, remuvelist) => dispatch(DeleteTableItems(list, remuvelist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

/*
    <MaterialTable
            title="Table App"
            columns={headers.map((el, l) => {
                el.field = el.dataIndex
                return el;
                })}
            data={list}
            options={{
                paging: false,
                position: sticky,
                selection: true,
            }}
            actions={[
                {
                    icon: () => <Delete />,
                    tooltip: "Delete Rows",
                    onClick: (target, remuvelist) => { DeleteTableItems(list, remuvelist) }
                }
            ]}
        />*/