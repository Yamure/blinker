import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen grainy bg-[#FAFAF9] relative flex items-center justify-center">
                    <div className="space-y-4 text-center">
                        <h2 className="text-lg font-medium text-zinc-900">
                            Something went wrong
                        </h2>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 text-sm text-white rounded-md bg-zinc-900 hover:bg-zinc-800"
                        >
                            Refresh page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
