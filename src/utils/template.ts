import * as ejs from 'ejs';

interface TemplateData {
    projectName: string
}

export function render(content: string, data: TemplateData) {
    return ejs.render(content, data);
}