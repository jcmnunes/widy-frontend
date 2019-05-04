import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { isKeyHotkey } from 'is-hotkey';
import {
  IconFormatBold,
  IconFormatCode,
  IconFormatItalic,
  IconFormatQuote,
  IconFormatUnderline,
  IconFormatListNumber,
  IconFormatListBullet,
  IconFormatHeading1,
  IconFormatHeading2,
} from '../../../../icons/Icons';
import initialValue from './value.json';

/**
 * Define the default node type.
 *
 * @type {String}
 */
const DEFAULT_NODE = 'paragraph';

/**
 * Define hotkey matchers.
 *
 * @type {Function}
 */
const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');

const StyledNotesEditor = styled.div`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.neutral300};
  background: white;
  color: ${props => props.theme.neutral700};
  min-height: 192px;
  margin-bottom: 32px;

  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 20px;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 20px;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  pre,
  code {
    font-family: 'Hack', monospace;
    font-size: 12px;
    background: ${props => props.theme.neutral050};
    border: 1px solid ${props => props.theme.neutral200};
    border-radius: 4px;
    padding: 2px;
  }

  strong {
    font-weight: 700;
  }

  blockquote {
    border-left: 2px solid ${props => props.theme.neutral300};
    padding-left: 10px;
    color: ${props => props.theme.neutral500};
    font-style: italic;
    margin: 8px 0;
  }
`;

const Button = styled.span`
  cursor: pointer;
  height: 28px;
`;

const Menu = styled('div')`
  & > * {
    display: flex;
    align-items: center;
  }

  & > * + * {
    margin-left: 15px;
  }
`;

const Toolbar = styled(Menu)`
  display: flex;
  position: relative;
  border-bottom: 2px solid #eee;
  margin-bottom: 12px;
  height: 28px;
`;

/**
 * The rich text example.
 *
 * @type {Component}
 */
class NotesEditor extends React.Component {
  constructor(props) {
    super(props);
    const { notes, id } = props.selectedTask;
    const existingValue = notes ? JSON.parse(notes) : null;
    this.state = {
      prevSelectedTaskId: id,
      value: Value.fromJSON(existingValue || initialValue),
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.selectedTask) return null;

    if (props.selectedTask.id !== state.prevSelectedTaskId) {
      const { notes, id } = props.selectedTask;
      const existingValue = notes ? JSON.parse(notes) : null;
      return {
        prevSelectedTaskId: id,
        value: Value.fromJSON(existingValue || initialValue),
      };
    }
    return null;
  }

  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */
  hasMark = type => {
    const { value } = this.state;
    return value.activeMarks.some(mark => mark.type === type);
  };

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @param {String} type
   * @return {Boolean}
   */
  hasBlock = type => {
    const { value } = this.state;
    return value.blocks.some(node => node.type === type);
  };

  /**
   * Store a reference to the `editor`.
   *
   * @param {Editor} editor
   */
  ref = editor => {
    this.editor = editor;
  };

  /**
   * Render a mark-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */
  renderMarkButton = (type, icon) => {
    const { theme } = this.props;
    const isActive = this.hasMark(type);

    return (
      <Button active={isActive} onMouseDown={event => this.onClickMark(event, type)}>
        {React.cloneElement(icon, {
          primaryColor: isActive ? theme.yellow700 : theme.neutral600,
        })}
      </Button>
    );
  };

  /**
   * Render a block-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */
  renderBlockButton = (type, icon) => {
    const { theme } = this.props;
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const {
        value: { document, blocks },
      } = this.state;

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = this.hasBlock('list-item') && parent && parent.type === type;
      }
    }

    return (
      <Button active={isActive} onMouseDown={event => this.onClickBlock(event, type)}>
        {React.cloneElement(icon, {
          primaryColor: isActive ? theme.yellow700 : theme.neutral600,
        })}
      </Button>
    );
  };

  /**
   * Render a Slate node.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @param {function} next
   * @return {Element}
   */
  renderNode = (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
      default:
        return next();
    }
  };

  /**
   * Render a Slate mark.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @param {function} next
   * @return {Element}
   */
  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'code':
        return <code {...attributes}>{children}</code>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underlined':
        return <u {...attributes}>{children}</u>;
      default:
        return next();
    }
  };

  /**
   * On change, save the new `value`.
   *
   * @param {Editor} editor
   */
  onChange = ({ value }) => {
    // Check to see if the document has changed before saving.
    if (value.document !== this.state.value.document) {
      const payload = { notes: JSON.stringify(value.toJSON()) };
      this.props.updateTask(this.props.selectedTask.id, payload);
    }
    this.setState({ value });
  };

  /**
   * On key down, if it's a formatting command toggle a mark.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {function} next
   * @return {Change}
   */
  onKeyDown = (event, editor, next) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold';
    } else if (isItalicHotkey(event)) {
      mark = 'italic';
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined';
    } else if (isCodeHotkey(event)) {
      mark = 'code';
    } else {
      return next();
    }

    event.preventDefault();
    editor.toggleMark(mark);
    return null;
  };

  /**
   * When a mark button is clicked, toggle the current mark.
   *
   * @param {Event} event
   * @param {String} type
   */
  onClickMark = (event, type) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  };

  /**
   * When a block button is clicked, toggle the block type.
   *
   * @param {Event} event
   * @param {String} type
   */
  onClickBlock = (event, type) => {
    event.preventDefault();

    const { editor } = this;
    const { value } = editor;
    const { document } = value;

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else if (isList) {
        editor
          .unwrapBlock(type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list')
          .wrapBlock(type);
      } else {
        editor.setBlocks('list-item').wrapBlock(type);
      }
    }
  };

  /**
   * Render.
   *
   * @return {Element}
   */
  render() {
    const { value } = this.state;
    return (
      <StyledNotesEditor>
        <Toolbar>
          {this.renderBlockButton('heading-one', <IconFormatHeading1 size={20} />)}
          {this.renderBlockButton('heading-two', <IconFormatHeading2 size={20} />)}
          {this.renderMarkButton('bold', <IconFormatBold size={14} />)}
          {this.renderMarkButton('italic', <IconFormatItalic size={14} />)}
          {this.renderMarkButton('underlined', <IconFormatUnderline size={14} />)}
          {this.renderMarkButton('code', <IconFormatCode size={14} />)}
          {this.renderBlockButton('block-quote', <IconFormatQuote size={14} />)}
          {this.renderBlockButton('numbered-list', <IconFormatListNumber size={20} />)}
          {this.renderBlockButton('bulleted-list', <IconFormatListBullet size={20} />)}
        </Toolbar>
        <Editor
          spellCheck
          autoFocus
          placeholder="Enter some notes here..."
          ref={this.ref}
          value={value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
        />
      </StyledNotesEditor>
    );
  }
}

NotesEditor.propTypes = {
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
  updateTask: PropTypes.func.isRequired,
  selectedTask: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    notes: PropTypes.string,
  }).isRequired,
};

export default withTheme(NotesEditor);
