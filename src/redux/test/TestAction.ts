import {initState, type TestStateType, updateState} from "./TestState.ts";
import {useState} from "react";
import {ELoadingStatus} from "../../const/Event.ts";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "../store.ts";
import {apiService} from "../../repositories/ApiService.ts";

export const TestAction = () => {
    const [state, setState] = useState<TestStateType>(initState);
    const reduxState = useSelector((state: RootState) => state.test);
    const dispatch = useDispatch();

    const dispatchGetSuggestList = () => {
        setState({
            ...state,
            isLoading: ELoadingStatus.loading
        });

        return apiService.getTodos()
            .then(res => {
                dispatch(updateState(res.data));

                setState({
                    ...state,
                    isLoading: ELoadingStatus.success,
                    items: res.data
                })
            })
            .catch(e => {
                setState({
                    ...state,
                    isLoading: ELoadingStatus.error,
                    error: e
                })
            })
    }

    const dispatchGetList = () => {
        setState({
            ...state,
            isLoading: ELoadingStatus.loading
        });

        return apiService.getUsers()
            .then(res => {

                setState({
                    ...state,
                    isLoading: ELoadingStatus.success,
                    items: res.data
                })
            })
            .catch(e => {
                setState({
                    ...state,
                    isLoading: ELoadingStatus.error,
                    error: e
                })
            })
    }

    const dispatchClearState = () => {
        setState(initState);
    }

    const dispatchDefaultState = () => {
        if (reduxState.items.length > 0) {
            setState({
                ...state,
                items: reduxState.items
            });
        } else {
            dispatchGetSuggestList();
        }
    }

    return {
        vm: state,
        dispatchGetList,
        dispatchDefaultState
    }
}