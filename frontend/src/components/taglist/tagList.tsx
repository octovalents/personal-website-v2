import React from "react";
import Tag from "components/taglist/tag/tag";

import "./tagList.css";

interface Props {
    /* Define the props for your component here */
    tags: string[];
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
    expanded: boolean;
}

class TagList extends React.Component<Props, State> {
    private tagListRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.tagListRef = React.createRef<HTMLDivElement>();
        this.state = {
            /* Initialize your component's state here */
            expanded: false,
        };
    }

    componentDidMount() {
        this.checkOverflow();
        window.addEventListener("resize", this.checkOverflow);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkOverflow);
    }

    checkOverflow = () => {
        const tagList = this.tagListRef.current;

        // check if taglist is empty
        if (tagList) {
            // add elements with '.tag'
            const tagElements = Array.from(
                tagList.querySelectorAll(".tag")
            ) as HTMLElement[];

            // calculate one tag width
            const tagWidths = tagElements.map((tag) => tag.offsetWidth);

            // calculate tag list width
            const tagListWidth = tagList.offsetWidth;

            let currentWidth = 0;
            let hiddenTags = 0;

            // determine which tags should be hidden
            for (let i = 0; i < tagWidths.length; i++) {
                currentWidth += tagWidths[i];
                if (currentWidth > tagListWidth) {
                    hiddenTags = tagWidths.length - i;
                    break;
                }
            }

            if (hiddenTags > 0) {
                this.setState({ expanded: false });
            }
        }
    };

    toggleExpand = () => {
        this.setState((prevState) => ({ expanded: !prevState.expanded }));
    };

    render() {
        /* Define the structure of your component's UI here */
        const { tags, lightMode } = this.props;
        const { expanded } = this.state;

        return (
            <div className="tag-list" ref={this.tagListRef}>
                {tags.map((tag, index) =>
                    !expanded && index >= 1 ? null : (
                        <Tag key={tag} name={tag} lightMode={lightMode} />
                    )
                )}
                {!expanded && tags.length > 1 && (
                    <button
                        className={`oct-btn-tag ${lightMode ? "light" : ""}`}
                        onClick={this.toggleExpand}>
                        +{tags.length - 1} more
                    </button>
                )}
                {expanded && (
                    <button
                        className={`oct-btn-tag ${lightMode ? "light" : ""}`}
                        onClick={this.toggleExpand}>
                        Collapse
                    </button>
                )}
            </div>
        );
    }
}

export default TagList;
