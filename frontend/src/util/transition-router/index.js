import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

let FadeSwitch = ({ children, timeout, location }) => {
    const [delayedPath, setDelayedPath] = useState(location);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (location.pathname != delayedPath.pathname) {
            setShow(false);
            let int = setInterval(() => {
                setDelayedPath(location);
                clearInterval(int);
            }, timeout);
        }
    }, [location.pathname]);

    useEffect(() => {
        let int = setInterval(() => {
            setShow(true);
            clearInterval(int);
        }, timeout / 2);
    }, [delayedPath.pathname]);

    return (
        <Switch location={delayedPath}>
            {children.map((child) => (
                <FadeInRoute key={child.props.path} show={show} timeout={timeout} {...child.props} />
            ))}
        </Switch>
    );
};

FadeSwitch = withRouter(FadeSwitch);

const FadeInComponent = ({ children, show, timeout }) => {
    const [shouldShow, setShouldShow] = useState(false);
    const [style, setStyle] = useState({ opacity: 0 });

    useEffect(() => {
        let mounted = true;
        setStyle({ opacity: 0 });

        if (show) {
            setShouldShow(true);
            setStyle({ opacity: 1 });
        } else {
            let int = setInterval(() => {
                if (mounted) {
                    setShouldShow(false);
                }
                clearInterval(int);
            }, timeout);
        }

        return () => (mounted = false);
    }, [show]);

    return (
        <div
            style={{
                transition: 'opacity ease-in-out ' + timeout + 'ms',
                msTransition: 'opacity ease-in-out ' + timeout + 'ms',
                OTransition: 'opacity ease-in-out ' + timeout + 'ms',
                WebkitTransition: 'opacity ease-in-out ' + timeout + 'ms',
                MozTransition: 'opacity ease-in-out ' + timeout + 'ms',
                ...style,
            }}
        >
            {shouldShow ? children : ''}
        </div>
    );
};

const FadeInRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(routeProps) => (
                <FadeInComponent show={rest.show} timeout={rest.timeout}>
                    <Component {...routeProps} />
                </FadeInComponent>
            )}
        />
    );
};

export { FadeSwitch, FadeInRoute, FadeInComponent };
