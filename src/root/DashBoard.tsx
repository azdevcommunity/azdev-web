import React, {FC} from 'react';

interface Props {
    children: React.ReactNode
}

const DashBoard: FC<Props> = ({children}) => {
    return (
        <div style={{
            backgroundColor: "#141418"
        }}>
            {children}
        </div>
    );
};

export default DashBoard;