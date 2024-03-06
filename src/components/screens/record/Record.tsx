import styles from "./Record.module.scss"
import {FC} from "react";
import {useAppDispatch} from "../../../hooks/redux";
import {updateRecord} from "../../../store/listRecordSlice/listRecordSlice";
import {recordStatuses} from "../../../constants/constants";

const Record: FC<{ id: string, title: string, status: string }> = ({title, status, id}) => {
    const dispatch = useAppDispatch()

    const handleUpdateUser = () => {
        let nextStatus = status === recordStatuses.notCompleted ? recordStatuses.completed : recordStatuses.notCompleted;
        dispatch(updateRecord({id: id, status: nextStatus}));
    };

    return (
        <div className={styles.container}>
            <p onClick={handleUpdateUser}>{title}</p>
            <span>{status}</span>
        </div>
    );
};

export default Record;