import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles({
  productDetails: {
    display: 'flex',
    padding: '2rem 2rem 0 2rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greenBall: {
    color: '#fafafa',
  },
  productName: {},
  reviewStyle: {
    margin: '2rem',
    minHeight: '450px',
    verticalAlign: 'center',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    alignItems: 'baseline',
    border: '1px solid #06d5e8',
    borderRadius: '4px',
  },
  pStyle: {
    margin: '5px 3px',
  },
  upperPStyle: {
    marginTop: '4px',
    marginRight: '1px',
    padding: '2px 6px',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  reviewUpperPart: {
    padding: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 'auto',
  },
  reviewBottomPart: {
    padding: '1rem',
    display: 'flex',
  },
  positive: {
    marginRight: '4px',
    border: '1px solid #06d5e8',
    color: '#06d5e8',
    backgroundColor: 'rgba(6, 213, 232, 0.1)',
  },
  negative: {
    marginRight: '4px',
    border: '1px solid #ed68ff',
    color: '#ed68ff',
    backgroundColor: 'rgba(237, 104, 255, 0.1)',
  },
  aspect: {
    marginRight: '4px',
    border: '1px solid #4a90e2',
    color: '#4a90e2',
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
  },
});

function AnalyzeReview({ reviewResult }) {
  const classes = useStyles();

  let aspectSerializer = [];

  reviewResult.sentiment_analysis.sentence_list.forEach(sentence_list => {
    sentence_list.segment_list.forEach(segment_list => {
      segment_list.polarity_term_list.forEach(polarity_term_list => {
        let typeOfAspect = 'NEU';

        if (
          polarity_term_list.score_tag === 'P' ||
          polarity_term_list.score_tag === 'P+'
        ) {
          typeOfAspect = 'positive';
        } else if (
          polarity_term_list.score_tag === 'N' ||
          polarity_term_list.score_tag === 'N+'
        ) {
          typeOfAspect = 'negative';
        }

        aspectSerializer.push({
          term: reviewResult.text.slice(
            parseInt(polarity_term_list.inip),
            parseInt(polarity_term_list.endp) + 1,
          ),
          typeOfAspect,
        });

        if (polarity_term_list.sentimented_concept_list) {
          polarity_term_list.sentimented_concept_list.forEach(
            sentimented_concept_list => {
              aspectSerializer.push({
                term: sentimented_concept_list.variant,
                typeOfAspect: 'aspect',
              });
            },
          );
        }
      });

      if (segment_list.sentimented_concept_list) {
        segment_list.sentimented_concept_list.forEach(
          sentimented_concept_list => {
            aspectSerializer.push({
              term: sentimented_concept_list.variant,
              typeOfAspect: 'aspect',
            });
          },
        );
      }

      if (segment_list.sentimented_entity_list) {
        segment_list.sentimented_entity_list.forEach(
          sentimented_entity_list => {
            aspectSerializer.push({
              term: sentimented_entity_list.form,
              typeOfAspect: 'aspect',
            });
          },
        );
      }
    });
  });

  return (
    <div className={classes.reviewStyle}>
      <div className={classes.reviewUpperPart}>
        {reviewResult.text.split(' ').map((element, index) => {
          let cssClass = classes.pStyle;
          aspectSerializer.forEach(serializeAspect => {
            const serializeTerm = serializeAspect.term.toUpperCase();
            const reviewTextPart = element
              .replace(/[.,;_?!%$#]/g, '')
              .toUpperCase();

            if (
              serializeTerm === reviewTextPart &&
              serializeAspect.term !== 'NEU'
            ) {
              cssClass = `${classes.upperPStyle} ${
                classes[serializeAspect.typeOfAspect]
              }`;
            }
          });

          return (
            <Typography key={index} variant="body1" className={cssClass}>
              {element}
            </Typography>
          );
        })}
      </div>
      <div className={classes.reviewBottomPart}>
        <p className={`${classes.upperPStyle} ${classes['positive']}`}>
          Positive
        </p>
        <p className={`${classes.upperPStyle} ${classes['negative']}`}>
          Negative
        </p>
        <p className={`${classes.upperPStyle} ${classes['aspect']}`}>Aspect</p>
      </div>
    </div>
  );
}

function ReviewDialog({
  open,
  handleClose,
  reviewText = '',
  productName,
  productDate,
}) {
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="md"
      className={classes.dialogStyle}
      fullWidth
    >
      <div className={classes.productDetails}>
        <Typography variant="h5" className={classes.productName}>
          {productName}
        </Typography>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.greenBall}
          onClick={handleClose}
        >
          <Close />
        </Fab>
        <Typography variant="h5">{productDate}</Typography>
      </div>
      {open && <AnalyzeReview reviewResult={reviewText} />}
    </Dialog>
  );
}

export default ReviewDialog;
