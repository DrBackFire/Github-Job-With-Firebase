import { jobs } from './jobsDBy'
import { db } from '../index'

export const add = () => {
  jobs.forEach(function(job) {
    db.collection('jobs')
      .add({
        id: job.id,
        type: job.type,
        url: job.url,
        created_at: job.created_at,
        company: job.company,
        company_url: job.company_url,
        location: job.location,
        title: job.title,
        description: job.description,
        how_to_apply: job.how_to_apply,
        company_logo: job.company_logo
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  })
}
