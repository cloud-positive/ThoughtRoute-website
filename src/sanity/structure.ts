import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            // Testimonials Group
            S.listItem()
                .title('Testimonials')
                .child(
                    S.documentTypeList('testimonial')
                        .title('Testimonials')
                ),
            S.divider(),
            // Blog Group
            S.listItem()
                .title('Blog')
                .child(
                    S.list()
                        .title('Blog Content')
                        .items([
                            S.listItem()
                                .title('Posts')
                                .child(
                                    S.documentTypeList('post')
                                        .title('All Posts')
                                ),
                            S.listItem()
                                .title('Authors')
                                .child(
                                    S.documentTypeList('author')
                                        .title('Authors')
                                ),
                            S.listItem()
                                .title('Categories')
                                .child(
                                    S.documentTypeList('category')
                                        .title('Categories')
                                ),
                        ])
                ),
            // Filter out types that are already in the list
            ...S.documentTypeListItems().filter(
                (listItem) => !['testimonial', 'post', 'author', 'category'].includes(listItem.getId()!)
            ),
        ])
