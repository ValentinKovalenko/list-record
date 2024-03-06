import {FC} from "react";
import {Record} from "../../../store/listRecordSlice/listRecord.types";
import {recordStatuses} from "../../../constants/constants";
import styles from "./DisplayCounter.module.scss";

const DisplayCounter: FC<{counter: Record[]}> = ({counter}) => {
    const completed = counter.filter((count)=>count.status === recordStatuses.completed)
    const uncompleted = counter.filter((count)=>count.status === recordStatuses.notCompleted)

    return (
        <div className={styles.counter}>
            <span>Completed: <span className={styles.number}>{completed.length}</span></span>
            <span>Not completed: <span className={styles.number}>{uncompleted.length}</span></span>
        </div>
    );
};

export default DisplayCounter;