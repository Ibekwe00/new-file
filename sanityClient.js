import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '0q0rgfxu',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skhFlKRvTTvjiiiz5q0EY12QrUMhW4tNHyJpV8V45DjKFaaIAhC364UmebdeObCZDyvLR0SgFWngXaROVkbANOwTKArwFtdcHmhVhDCJJ5Iblpt7zp32xQQ0lB1kqqsZQPMxutWboj8HIgwQhrzYZ5W0lqJL351n92vPfQkKzjV9ihuGWC6d',
    useCdn: 'false',
})