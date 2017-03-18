import {DragSource,DropTarget} from 'react-dnd';
import {addToCart} from '../modules/cart';

export const SAMPLE = 'SAMPLE';

const source = {
    beginDrag(props) {
        return {
            id: props.id,
            name: props.name,
        }
    }
};

// const target = {
//     drop(props) {
//         console.warn('>>>>','drop');
//         addToCart(props.id);
//     }
// };

const dragCollect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
});

// const dropCollect = (connect, monitor) => ({
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver()
// });

export const drag = DragSource(SAMPLE, source, dragCollect);
// export const drop = DropTarget(SAMPLE, target, dropCollect);